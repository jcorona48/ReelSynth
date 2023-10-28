import "../components/Movies/Movies"
import { useParams } from "react-router-dom"
import { useQuery, gql } from "@apollo/client";
import useSEO from "../Hooks/useSEO";
import Rating from "../components/Rating/Rating";
import { parseDuration } from "../utils/parse";

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
        <div className="Fondo">
            
            { loading && <h1>Loading...</h1> }
            { error && <h1>Error...{error.message}</h1> }
            { data?.getMovies && data?.getMovies.length === 0 && <h1>Not Found</h1>}

            {
                data?.getMovies && data?.getMovies.length > 0 && (
                    <>
                    <img className="fondo-movie" src={movie.imgURL} />
                    <div className="columns-container"> 
                            <div className="contenedor-movie">
                                <div className=" billboard">
                                    <img className="picture" src={movie.imgURL} alt="billboard"/>
                                </div>
                                <div className="cont movie">
                                    <div className="parte head">
                                        <h1 className="titulo">{movie.title}</h1>
                                        <div className="like"><i className="fa-solid fa-heart"></i> {movie.likeCount}</div>
                                        <div className="comment"><i className="fa-solid fa-comment"></i> {movie.commentCount}</div>
                                    </div>
                                    <span className="center parte rating"><Rating rating={movie.rating} /></span>
                                    <span className=" center parte duration">{ parseDuration(movie.duration) }</span>
                                    <span className="center parte year">{movie.year}</span>
                                </div>

                                <div className="cont description">
                                    <span className="parte description-info">{movie.description}</span>
                                    <div className="parte genrer">
                                        <p>Categoria:
                                        <a> {movie.genrers && movie.genrers.map( (genrer, index) =>{
                                        if(index === movie.genrers.length - 1) return genrer.name
                                        return genrer.name + ', '
                                        })}</a></p>
                                    </div>
                                    <div className="parte studio">
                                        <p>Studio: <a>{movie.studio && movie.studio.name} </a></p>
                                        <p>Producer: <a>{movie.studio && movie.studio.producer.name}</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="column-2">
                                <h1>Mural top Peliculas</h1>
                            </div>
                    </div>
                    </>
                )
            }
        </div>
    )
}