
import './style.css';

const Hosts = ({ videos, setVideo }) => {
  return (
    <div className="hosts-video">
      <ul>
        {videos.map((videoAvaliable) => (
          <li
            className="host-video"
            onClick={() => {
              setVideo(videoAvaliable);
            }}
            title={videoAvaliable.host.description}
          >
            {videoAvaliable.host.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hosts;
