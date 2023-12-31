import './ContentOption.css'
import Rating from "../Rating/Rating";
import { parseDuration } from "../../utils/parse";

export default function MovieOption({item}) {
    return (
        <main className="top-movies">
                <div className="top-movies-list">
                    <ul className="list">
                        <li className="list-item">
                            <div className="list-item-img">
                                <img src={item.imgURL} alt="movie" />
                            </div>
                            <div className="list-item-info">
                                <h3>{item.title}</h3>
                                <div className="list-item-info-rating">
                                    <p><Rating rating={item.rating} /></p>
                                    { item.seasons && <p>{item.seasons} seasons</p> }
                                    { item.duration && <p>{parseDuration(item.duration)}</p> }
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        </main>

    )
}