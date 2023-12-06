import './ButtomEpisode.css';

export default function ButtomEpisode() {
    return (
        <main>
            <div className="container-buttomepisode">
                <div className="buttom-episode">
                    <ul>
                        <li className="back-none"><i className='fa-solid fa-backward'/><a href="#">Back</a></li> 
                        <li className='season-none'><i className='fa-regular fa-send-back'/><a href="#">All Season</a></li>
                        <li className='episode-none'><i className='fa-regular fa-list'/><a href="#">All Episode</a></li>
                        <li className='next-none'><i className='fa-solid fa-forward'/><a href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        </main>
    )
}
