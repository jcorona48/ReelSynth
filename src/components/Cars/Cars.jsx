
import Car from "./Car"
import "./Cars.css"
export default function Cars({items}) {
    return (
        <div className="Cars">
            {items.map((item) => (
                <Car key={item.id} item={item}/>
            ))}
        </div>
    )
}