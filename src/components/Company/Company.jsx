import './Company.css'

export default function Company({item}) {

    return (
        <div className="company">
            <a className="company-img">
                <img src={item.imgURL} alt={item.name}></img>
            </a>
            <div className="company-info">
                <h1>{item.name}</h1>
            </div>
        </div>
    )
}