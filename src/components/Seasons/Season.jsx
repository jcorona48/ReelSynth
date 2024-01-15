import './Season.css';
import { Link } from 'react-router-dom';

export default function Season({item, type}) {

    return (
        <Link className='container-season' to={`${type}/${item.number}`}>
            <main className='container-season-detail'>
                <div className='season-detail'>
                    <h1>{item.title}</h1>
                    <div className='season-icon'>
                        <i className="fa-regular fa-arrow-up-right-from-square" />
                    </div>
                </div>
            </main>
        </Link>
    )

}