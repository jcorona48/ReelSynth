
import Card from "./Card"
import "./Cards.css"
import { Link } from "react-router-dom"
export default function Cards({items}) {
    return (
        <div className="Cars">
            {items.map((item) => (
                <Link to={`/movie/${item.title.replace(/ /g, '-')}`} key={item.id} >
                    <Card key={item.id} item={item}/>
                </Link>
            ))}
        </div>
    )
}