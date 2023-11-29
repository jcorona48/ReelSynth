import './Season.css';
import { Link } from 'react-router-dom';

export default function Season({item, type}) {

    return (
        <Link className='container-season' to={`/${type}/${item.name}`}>
            <main className='container-season-detail'>
                <div className='season-detail'>
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                    <div className="season-info">
                        <h4>Season {item.number}</h4>
                        <h4>Epidoses: {item.episodesCount}</h4>
                    </div>
                </div>
                <div className='season-icon'>
                    <i className="fa-regular fa-arrow-up-right-from-square" />
                </div>
            </main>
        </Link>
    )

}