import './details.css'
import Detail from './detail.jsx'

export default function Details({items, type=''}) {
    return (
        <div className='Details'>
            {items.map((item) => (
                    <Detail key={item.id} item={item} type={type} />
            ))}
        </div>
    )
}