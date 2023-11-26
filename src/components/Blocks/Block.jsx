import './Block.css';
import { Link } from 'react-router-dom';
export default function Block({item, type}) {
    console.log(type);
    return (
        <Link className='container-block' to={`/${type}/${item.id}`}>
            {item.imgURL &&             
                <a className="block-img">
                    <img src={item.imgURL} alt={item.name}></img>
                </a>}
            <div className='block-name'>
                <p>{item.name}</p>
            </div>
        </Link>
    )
}