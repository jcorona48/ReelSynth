import useSEO from "../Hooks/useSEO";
import { useQuery, gql } from "@apollo/client";
import Cards from "../components/Cards/Cards";

const query = gql`
    query GetMovies($top: Int!) {
    getTopMovies(top: $top) {
        id
        title
        description
        rating
        likeCount
        year
        commentCount
        imgURL
        genrers{
            name
        }
        duration
    }
}
`;

export default function TopMovies() {
    useSEO({ title: "Top Movies", description: "Top Movies page" });
    const { data: movies, loading: loadingMovies, error: errorMovies } = useQuery(query,
        {
            variables: {
                top: 0
            }
        });

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
                movies?.getTopMovies && movies?.getTopMovies.length > 0 ? <Cards items={movies.getTopMovies} type="movie" /> : <h1>No hay Movies</h1>
            }
            </>
        </div>
    );
    }