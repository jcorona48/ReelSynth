import "../Movies/Movies"
import "./TopMovies.css";
import { useQuery, gql } from "@apollo/client";
import Rating from "../Rating/Rating";
import { parseDuration } from "../../utils/parse";



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
    
    
    const { data, loading, error } = useQuery(query);
    const movie = data && data?.getMovies ? data?.getMovies[0] : null;

    return (
        <div className="top-movies">
            <h2>Top Movies</h2>
            { loading && <h1>Loading...</h1> }
            { error && <h1>Error...{error.message}</h1> }
            { data?.getMovies && data?.getMovies.length === 0 && <h1>Not Found</h1>}
            {
                data?.getMovies && data?.getMovies.length > 0 && (
                    <>
                    <div className="top-movies-list">
                        <ul className="list">
                            <li className="list-item">
                                <div className="list-item-img">
                                    <img src={movie.imgURL} alt="movie" />
                                </div>
                                <div className="list-item-info">
                                    <h3>{movie.title}</h3>
                                    <div className="list-item-info-rating">
                                        <p><Rating rating={movie.rating} /></p>
                                        <p>{ parseDuration(movie.duration) }</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </>
                )
            }

        </div>
    );
}