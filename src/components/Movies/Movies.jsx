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


export default function Movies({ title }) {

  const { data: movies, loading: loadingMovies, error: errorMovies } = useQuery(GET_Movies, {
    variables: {
      input: {
        title: title
      }
    }
  });
    console.log(movies)
    console.log(title)
  return (
    <div>
          <>
            <h1 id="titulo" style={{ paddingLeft: "10px" }}>Movies</h1>
            {
              loadingMovies && <h1>Loading...</h1>
            }
            {
              errorMovies && <h1>Error...{errorMovies.message}</h1>
            }
            {
              movies?.getMovies && movies?.getMovies.length > 0 ? <Cards items={movies.getMovies} /> : <h1>No hay peliculas</h1>
            }
          </>
    </div>
  );
}
