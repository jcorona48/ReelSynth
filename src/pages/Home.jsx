import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Cars from "../components/Cars/Cars.jsx";

const GET_Movies = gql`
  query GetMovies {
    getMovies {
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

    getSeries {
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

    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_Movies);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  useEffect(() => {
    if (data && !loading && !error) {
      setMovies(data.getMovies);
      setSeries(data.getSeries);
    }
  }, [data]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 style={{ paddingLeft: "10px" }}>Movies</h1>
          {movies.length === 0 ? (
            <h1>No hay peliculas</h1>
          ) : (
            <Cars items={movies} />
          )}

          <h1 style={{ paddingLeft: "10px" }}>Series</h1>
          {series.length === 0 ? (
            <h1>No hay series</h1>
          ) : (
            <Cars items={series} />
          )}
        </>
      )}
    </div>
  );
}
