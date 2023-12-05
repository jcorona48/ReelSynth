import './ButtomEpisode.css';

export default function ButtomEpisode() {
    return (
        <main>
            <div className="container-buttomepisode">
                <div className="buttom-episode">
                    <ul>
                        <li><i className='fa-solid fa-backward'/><a href="#">Back</a></li> 
                        <li><i className='fa-regular fa-send-back'/><a href="#">All Season</a></li>
                        <li><i className='fa-regular fa-list'/><a href="#">All Episode</a></li>
                        <li><i className='fa-solid fa-forward'/><a href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        </main>
    )
}
