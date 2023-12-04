import './MiniDetail.css';
import { Link } from 'react-router-dom';

export default function MiniDetail({item}) {

    return (
        <>
            <Link to={`/studio/${item.id}`} className="Mini-Detail">           
                <div className="mini-detail-img">
                    <img src={item.imgURL} alt={item.name}></img>
                </div>
                <div className="mini-detail-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            </Link>
        </>
    )
}