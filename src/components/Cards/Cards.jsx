
import Card from "./Card"
import "./Cards.css"
import { Link } from "react-router-dom"
export default function Cards({items, type = 'movie'}) {
    return (
        <div className="Cars">
            {items.map((item) => (
                <Link to={`/${type}/${item.title.replace(/ /g, '-')}`} key={item.id} >
                    <Card key={item.id} item={item} type={type}/>
                </Link>
            ))}
        </div>
    )
}