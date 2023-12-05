import { useQuery, gql } from "@apollo/client";
import Cards from "../Cards/Cards";

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

export default function PageTopMovies() {
    const { data: movies, loading: loadingMovies, error: errorMovies } = useQuery(query,
        {
            variables: {
                top: 10
            }
        });

    return (
        <div>
            <>
            <main className="Page-Top-Movies">
                <articule className="container-page-topmovies">
                    <h1 id="titulo" className="Page-titulo">Top Movies</h1>
                    <div className="page-topmovies">
                        {
                            loadingMovies && <h1>Loading...</h1>
                        }
                        {
                            errorMovies && <h1>Error...{errorMovies.message}</h1>
                        }
                        {
                            movies?.getTopMovies && movies?.getTopMovies.length > 0 ? <Cards items={movies.getTopMovies} type="movie" /> : <h1>No hay Movies</h1>
                        }
                    </div>
                </articule>
            </main>
            </>
        </div>
    );
    }