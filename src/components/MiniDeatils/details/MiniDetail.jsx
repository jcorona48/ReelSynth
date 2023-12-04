import './MiniDetail.css';

export default function MiniDetail({item}) {

    return (
        <>
            <div className="Mini-Detail">           
                <div className="mini-detail-img">
                    <img src={item.imgURL} alt={item.name}></img>
                </div>
                <div className="mini-detail-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    )
}