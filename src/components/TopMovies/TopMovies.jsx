
import "./TopMovies.css";
import { useQuery, gql } from "@apollo/client";
import MoviesOptions from "../MovieOption/MoviesOptions";



const query = gql`
    query GetMovies {
    getMovies {
        id
        title
        rating
        imgURL
        duration
    }
}
`;

export default function TopMovies() {
    const { data: movies, loading: loadingMovies, error: errorMovies } = useQuery(query);
    return (
        <div>
            <>
            <h1 id="titulo" style={{ paddingLeft: "10px" }} className="Titulo">Top Movies</h1>
            {
                loadingMovies && <h1>Loading...</h1>
            }
            {
                errorMovies && <h1>Error...{errorMovies.message}</h1>
            }
            {
                movies?.getMovies && movies?.getMovies.length > 0 ? <MoviesOptions items={movies.getMovies} /> : <h1>No hay peliculas</h1>
            }
            </>
        </div>
    );
}