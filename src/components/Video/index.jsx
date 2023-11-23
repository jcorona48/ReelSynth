import { useEffect, useState } from 'react';
import Parse from 'html-react-parser';
import './style.css';
import Hosts from './Hosts';
import { useQuery, gql } from "@apollo/client";
import Comments from '../Comments'
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
  const [comments, setComments] = useState([])

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
      setComments(data?.getComments)
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
        <h2>{movie?.title}</h2>
        <div
          className="comments"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Comments type={type} movie={movie} />
        </div>
      </div>
    </div>
      )
    }
    
    </>
  );
};

export default WatchVideo;
