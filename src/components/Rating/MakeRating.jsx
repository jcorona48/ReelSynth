import './MakeRating.css';
import { useState } from 'react';

export default function MakeRating() {
    const [rating, setRating] = useState(0);
    const totalStars = 5;

    const handleClick = (starNumber) => {
        setRating(starNumber);
    };

    return (
        <div className='container-stars'>
        {[...Array(totalStars)].map((_, index) => (
            <span className='star'
            key={index}
            onClick={() => handleClick(index + 1)}
            style={{
                color: index < rating ? 'gold' : 'gray',
            }}
            >
            &#9733;
            </span>
        ))}
        </div>
    );
}