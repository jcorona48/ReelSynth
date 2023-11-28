import './detail.css'
import { Link } from 'react-router-dom';

export default function Detail({item, type}) {
    console.log(type);

    return (
        <>
            <div className="detail">
                {item.imgURL &&             
                <a className="detail-img">
                    <img src={item.imgURL} alt={item.name}></img>
                </a>}
                <div className="detail-info">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    )
}