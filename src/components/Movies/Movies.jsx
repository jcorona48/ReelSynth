import "./Movie.css"
import { useQuery, gql } from "@apollo/client";
import Cards from "../Cards/Cards.jsx";

const GET_Movies = gql`
  query GetMovies($input: inputMovie) {
  getMovies(input: $input) {
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


export default function Movies({ input = {} }) {

  const { data: movies, loading: loadingMovies, error: errorMovies } = useQuery(GET_Movies, {
    variables: {
      input
    }
  });
  return (
    <div className="Movies">
          <>
            <div className="titulo">
              <h1 id="titulo">Movies</h1>
            </div>
            {
              loadingMovies && <h1>Loading...</h1>
            }
            {
              errorMovies && <h1>Error...{errorMovies.message}</h1>
            }
            {
              movies?.getMovies && movies?.getMovies.length > 0 ? <Cards items={movies.getMovies} /> : <div className="alert-movie"><h1>No hay Movies</h1></div>
            }
          </>
    </div>
  );
}
