import Block from "./Block.jsx";
import "./Blocks.css";

export default function Blocks({items}) {
    return (
        <div className="Blocks">
            {items.map((item) => (
                    <Block key={item.id} item={item} />
            ))}
        </div>
    )
}