import './Season.css';
import { Link } from 'react-router-dom';

export default function Season({item, type}) {

    return (
        <Link className='container-season' to={`${type}/${item.number}`}>
            <main className='container-season-detail'>
                <div className='season-detail'>
                    <h1>{item.title}</h1>
                    <div className="season-info">
                        <h4>{type} {item.number}</h4>
                        { type === 'Season' ? <h4>Epidoses: {item.episodesCount}</h4> : null } 
                    </div>
                    <div className='season-icon'>
                        <i className="fa-regular fa-arrow-up-right-from-square" />
                    </div>
                </div>
                <div className="season-description">
                    <p>{item.description}</p>
                </div>
            </main>
        </Link>
    )

}