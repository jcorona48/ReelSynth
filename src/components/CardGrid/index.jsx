import Rating from "../Rating/Rating"
import { parseDuration } from "../../utils/parse"
import './style.css'

export default function CardGrid({ data, type = 'movie' }) {
    return (
        <div className="contenedor-movie">
            <div className=" billboard">
                <img className="picture" src={data.imgURL} alt="billboard" />
            </div>
            <div className="cont movie">
                <div className="parte head">
                    <h1 className="titulo">{data.title}</h1>
                    <div className="counter">
                        <div className="like"><i className="fa-solid fa-heart"></i> {data.likeCount}</div>
                        <div className="icon-comment"><i className="fa-solid fa-comment"></i> {data.commentCount}</div>
                    </div>
                </div>
                <span className="center rating">
                    <Rating rating={data.rating} />
                </span>
                <span className=" center duration">{type === 'movie' ? parseDuration(data.duration) : `Seasons ${data.seasons}`}</span>
                <span className="center year">{data.year}</span>
            </div>

            <div className="cont description">
                <span className="description-info">{data.description}</span>
                <div className="genrer">
                    <p>Categoria:
                        <a> {data.genrers && data.genrers.map((genrer, index) => {
                            if (index === data.genrers.length - 1) return genrer.name
                            return genrer.name + ', '
                        })}</a></p>
                </div>
                <div className="studio">
                    <p>Studio: <a>{data.studio && data.studio.name} </a></p>
                </div>
                <div className="producer">
                    <p>Producer: <a>{data.studio && data.studio.producer.name}</a></p>
                </div>
            </div>
        </div>
    )
}