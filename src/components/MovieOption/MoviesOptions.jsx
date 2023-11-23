import './MoviesOptions.css'
import MovieOption from './MovieOption'
import { Link } from 'react-router-dom'

export default function MoviesOptions({items}) {
    return (
        <div className="MoviesOptions">
            {items.map((item) => (
            <Link to={`/movie/${item.title.replace(/ /g, '-')}`} key={item.id} className='full-option'>
                <MovieOption key={item.id} item={item}/>
            </Link>
            ))}
        </div>
    )
}