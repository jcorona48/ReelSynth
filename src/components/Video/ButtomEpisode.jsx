import './ButtomEpisode.css';
import { useNavigate } from 'react-router-dom';

export default function ButtomEpisode({data}) {
    console.log(data)
    const navigate = useNavigate()
    const {title,seasonNumber, episodeNumber, serie:seasons, season: episodesCount, episode} = data



    return (
        <main>
            <div className="container-buttomepisode">
                <div className="buttom-episode">
                    <ul>
                        <li className="back-none" 
                            onClick={() => {
                                if(+episodeNumber === 1 && +seasonNumber === 1) return;

                                if(+episodeNumber === 1) return navigate(`/serie/${title}/season/${+seasonNumber - 1}/episode/${episodesCount}`)


                                 navigate(`/serie/${title}/season/${seasonNumber}/episode/${+episodeNumber - 1}`)


                        }}><i className='fa-solid fa-backward'/><a href="#">Back</a></li> 
                        <li className='season-none'
                            onClick={() => {
                                navigate(`/serie/${title}`)
                            }}
                        ><i className='fa-regular fa-send-back'/><a href="#">All Season</a></li>
                        <li className='episode-none'
                            onClick={() => {
                                navigate(`/serie/${title}/season/${seasonNumber}`)
                            }}
                        ><i className='fa-regular fa-list'/><a href="#">All Episode</a></li>
                        <li className='next-none'
                            onClick={() => {
                                if(+episodeNumber === episodesCount && +seasonNumber === seasons) return;

                                if(+episodeNumber === episodesCount) return navigate(`/serie/${title}/season/${+seasonNumber + 1}/episode/1`)
                                navigate(`/serie/${title}/season/${seasonNumber}/episode/${+episodeNumber + 1}`)
                            }}
                        ><i className='fa-solid fa-forward'/><a href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        </main>
    )
}
