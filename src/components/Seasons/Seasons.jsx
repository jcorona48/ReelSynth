import './Seasons.css';
import Season from '../Seasons/Season.jsx';

export default function Seasons({items, type='season'}) {
    return (
        <div className="Seasons">
            {items.map((item) => (
                    <Season key={item.id} item={item} type={type} />
            ))}
        </div>
    )
}