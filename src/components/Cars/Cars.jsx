
import Car from "./Car"
import "./Cars.css"
import { Link } from "react-router-dom"
export default function Cars({items}) {
    return (
        <div className="Cars">
            {items.map((item) => (
                <Link to={`/movie/${item.title.replace(/ /g, '-')}`} key={item.id} >
                    <Car key={item.id} item={item}/>
                </Link>
            ))}
        </div>
    )
}