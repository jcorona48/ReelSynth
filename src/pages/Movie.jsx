import "../components/Movies/Movies"
import { useParams } from "react-router-dom"
import { useQuery, gql } from "@apollo/client";
import useSEO from "../Hooks/useSEO";
import Rating from "../components/Rating/Rating";
import { parseDuration } from "../utils/parse";
import WatchVideo from "../components/Video";
import { useState, useEffect } from "react";
import TopMovies from "../components/TopMovies/TopMovies";
import CardGrid from "../components/CardGrid/";
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
    const [movie, setMovie] = useState(null)
    useSEO({title: titleTransformed, description: "Movie page"})


    const { data, loading, error } = useQuery(query, {
        variables: {
            input: {
                title: titleTransformed
            }
        }
    })
    

    useEffect( () => {
        if(data?.getMovies && data?.getMovies.length > 0){
            setMovie(data.getMovies[0])
        }
    }, [data])

    return(
        <div className="Fondo">
            
            { loading && <h1>Loading...</h1> }
            { error && <h1>Error...{error.message}</h1> }
            { data?.getMovies && data?.getMovies.length === 0 && <h1>Not Found</h1>}

            {
                data?.getMovies && data?.getMovies.length > 0 && movie && (
                    <>
                        <img className="fondo-movie" src={movie.imgURL} />
                        <div className="columns-container"> 
                                <CardGrid data={movie} />
                                <TopMovies />
                        </div>
                        <WatchVideo movie={movie} type={'Movie'} />
                    </>
                )
            }
        </div>
    )
}