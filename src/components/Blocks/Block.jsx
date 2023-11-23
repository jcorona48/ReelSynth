import './Block.css';

export default function Block({item}) {
    return (
        <div className='container-block'>
            {item.imgURL &&             
                <a className="block-img">
                    <img src={item.imgURL} alt={item.name}></img>
                </a>}
            <div className='block_port'>
                <p>{item.name}</p>
            </div>
            <div className="block-desc">
                <p>{item.description}</p>
            </div>
        </div>
    )
}