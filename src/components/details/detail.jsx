import './detail.css';

export default function Detail({item}) {

    return (
        <>
            <div className="detail">
                {item.imgURL &&             
                <div className="detail-img">
                    <img src={item.imgURL} alt={item.name}></img>
                </div>}
                <div className="detail-info">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    )
}