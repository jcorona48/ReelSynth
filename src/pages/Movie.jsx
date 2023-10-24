
import { useParams } from "react-router-dom"
import { useQuery, gql } from "@apollo/client";
import useSEO from "../Hooks/useSEO";
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
        <div>
            { loading && <h1>Loading...</h1> }
            { error && <h1>Error...{error.message}</h1> }
            { data?.getMovies && data?.getMovies.length === 0 && <h1>Not Found</h1>}

            {
                data?.getMovies && data?.getMovies.length > 0 && (
                    <>
                        <h1>Movie: {movie.title}</h1>
                        <p>Rating: {movie.rating}</p>
                        <p>Duration: {movie.duration}</p>
                        <p>Year: {movie.year}</p>
                        <p>Like Count: {movie.likeCount}</p>
                        <p>Comment Count: {movie.commentCount}</p>
                        <p>Description: {movie.description}</p>
                        <p>Studio: {movie.studio && movie.studio.name}</p>
                        <p>Producer: {movie.studio && movie.studio.producer.name}</p>
                        <p>Genrers: {movie.genrers && movie.genrers.map( (genrer, index) =>{
                            if(index === movie.genrers.length - 1) return genrer.name
                            return genrer.name + ', '
                        })}</p>
                        <div>
                            <img src={movie.imgURL} alt={movie.title} />
                        </div>
                    </>
                )
            }
            

        </div>
    )
}