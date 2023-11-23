import { useState } from 'react';
import Parse from 'html-react-parser';
import './style.css';
import Hosts from './Hosts';

const WatchVideo = ({ videos, movie }) => {
  const [video, setVideo] = useState(videos[0]);
  return (
    <div className="watch-video-container">
      <div className="watch-video">
        <Hosts videos={videos} setVideo={setVideo} />

        <div className="video">{Parse(video.url)}</div>
        <h2>{movie.title} - Completo online 100% gratis</h2>
        <div
          className="comments"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input type="text" placeholder="Escribe un comentario aqui" />
          <p>Hola mundo</p>
          <p>Tu madre </p>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
