import { useEffect, useState } from 'react';
import Parse from 'html-react-parser';
import './style.css';
import Hosts from './Hosts';
import { useQuery, gql } from "@apollo/client";
import Like from '../Like/like.jsx';
import MakeRating from '../Rating/MakeRating.jsx';
import ButtomEpisode from './ButtomEpisode.jsx';

const query = gql`
    query GetVideos($input: inputVideo) {
    getVideos(input: $input) {
        host {
        id
        name
        description
        }
        url
        id
    }
    }
    
`;



const WatchVideo = ({ type, movie }) => {
  
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(videos[0]);

  const { data, loading, error } = useQuery(query, {
    variables: {
        input: {
            entityID: movie?.id,
            entityType: type

        }
    }
})


  useEffect( () =>{
    if(data && data?.getVideos){
      setVideos(data?.getVideos)
      setVideo(data?.getVideos[0])
    }
  }, [data])
  


  return (<>
    { loading && ( <h2>Loading...</h2> )}
    {
      videos != [] && video?.url && (
    <div className="watch-video-container">
      <div className="watch-video">
        <Hosts videos={videos} setVideo={setVideo} />
        <div className="video">{Parse(video.url)}</div>
        <div className="container-movie-action">
          <h2>{movie?.title}</h2>
          <div className="movie-action">
            <MakeRating movie={movie} type={type} />
            <Like movie={movie} type={type}  />
          </div>
          <ButtomEpisode />
        </div>
      </div>
    </div>
      )
    }
    
    </>
  );
};

export default WatchVideo;
