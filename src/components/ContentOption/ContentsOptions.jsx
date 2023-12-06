import './ContentsOptions.css'
import ContentOption from './ContentOption'

export default function MoviesOptions({items, type = 'movie'}) {
    return (
        <div className="MoviesOptions">
            {items.map((item) => (
            <a href={`/#/${type}/${item.title.replace(/ /g, '-')}`} key={item.id} className='full-option'>
                <ContentOption key={item.id} item={item}/>
            </a>
            ))}
        </div>
    )
}