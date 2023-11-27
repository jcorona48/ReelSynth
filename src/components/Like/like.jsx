import { useState } from 'react';
import './like.css';

function Like() {

        const [like, setLike] = useState(false);
      
        const handleClick = () => {
          setLike(!like);
        }
      
        return (
          <div>
            <p>{like ? <a>Me gusta</a> : <a>No me gusta</a>}</p>
            <button onClick={handleClick}>
              {like ? 'Quitar Me gusta' : 'Dar Me gusta'}
            </button>
          </div>
        );
    }


export default Like;