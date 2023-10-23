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
  }
`;
export default function Movies() {
    const { data, loading, error } = useQuery(GET_Movies);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (data && !loading && !error) {
      setMovies(data.getMovies);
      console.log(data.getMovies);
    }
  }, [data]);

    return (
        <div>
            <h1>Movies</h1>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Cars items={movies} />
            )}
        </div>
    )
}