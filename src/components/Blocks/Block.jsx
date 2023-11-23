import './Block.css';

export default function Block({item}) {
    return (
        <div className='container-block'>
            <div className='block_port'>
                <p>{item.name}</p>
            </div>
            <div className="block-desc">
                <p>{item.description}</p>
            </div>
        </div>
    )
}