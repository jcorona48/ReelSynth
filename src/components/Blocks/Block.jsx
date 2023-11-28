import './Block.css';
import { Link } from 'react-router-dom';

export default function Block({item, type}) {
    
    return (
        <Link className='container-block' to={`/${type}/${item.id}`}>
            {item.imgURL &&             
                <div className="block-img">
                    <img src={item.imgURL} alt={item.name}></img>
                </div>}
            <div className='block-name'>
                <p>{item.name}</p>
            </div>
        </Link>
    )
}