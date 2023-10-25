import "../PagesCSS/Movie.css"
import { useParams } from "react-router-dom"
import { useQuery, gql } from "@apollo/client";
import useSEO from "../Hooks/useSEO";
import {parseRating } from '../utils/parse'

const query = gql`
    query GetMovies($input: inputMovie) {
    getMovies(input: $input) {
        id
        title
        description
        likeCount
        commentCount
        rating
        year
        imgURL
        genrers {
            name
        }
        duration
        studio {
            name
            producer {
                name
            }
        }
    }
}
`;


export default function Movie(){
    const { title } = useParams()
    const titleTransformed = title.replace(/-/g, ' ')
    useSEO({title: titleTransformed, description: "Movie page"})
    const { data, loading, error } = useQuery(query, {
        variables: {
            input: {
                title: titleTransformed
            }
        }
    })
    const movie = data && data?.getMovies ? data?.getMovies[0] : null;
    return(
        <div className="container-movie"> 
            { loading && <h1>Loading...</h1> }
            { error && <h1>Error...{error.message}</h1> }
            { data?.getMovies && data?.getMovies.length === 0 && <h1>Not Found</h1>}

            {
                data?.getMovies && data?.getMovies.length > 0 && (
                    <>
                        <div className="Title card-movie">
                            <h1>{movie.title}</h1>
                        </div>
                        <div className="Rating card-movie">
                            <p>Rating:{parseRating(movie.rating).map( (rate, index) => {
                                if(rate === 1) return <i className='fas fa-star star' key={index} ></i>
                                if(rate === 0) return <i className='far fa-star star' key={index} ></i>
                                if(rate === 0.5) return <i className='fas fa-star-half-alt star' key={index}></i>
                            })}</p>
                        </div>
                        <div className="Duration card-movie">
                            <p>Duration: {movie.duration}</p>
                        </div>
                        <div className="Year card-movie">
                            <p>Year: {movie.year}</p>
                        </div>
                        <div className="Interactive card-movie">
                            <p>Like: <span style={{fontSize: '16px', color: 'red'}}>♥</span>  {movie.likeCount}</p>
                            <p>Comment: 💬 {movie.commentCount} </p>
                        </div>
                        
                        <div className="Creator card-movie">
                            <p>Studio: {movie.studio && movie.studio.name}</p>
                            <p>Producer: {movie.studio && movie.studio.producer.name}</p>
                        </div>

                        <div className="Genrer card-movie">
                            <p>Genrers: {movie.genrers && movie.genrers.map( (genrer, index) =>{
                                if(index === movie.genrers.length - 1) return genrer.name
                                return genrer.name + ', '
                            })}</p>
                        </div>

                        <div className="description card-movie">
                            <p>Description: {movie.description}</p>
                        </div>

                        <div className="billboard card-movie">
                            <img src={movie.imgURL} alt={movie.title} />
                        </div>
                    </>
                )
            }
        </div>
    )
}