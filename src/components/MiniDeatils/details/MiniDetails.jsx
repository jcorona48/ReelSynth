import './MiniDetails.css'
import MiniDetail from './MiniDetail'

export default function Details({items, type='studio'}) {
    return (
        <div className='Mini-Details'>
            {items.map((item) => (
                    <MiniDetail key={item.id} item={item} type={type} />
            ))}
        </div>
    )
}