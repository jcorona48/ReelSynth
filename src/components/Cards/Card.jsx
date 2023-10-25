import './Card.css'
import { parseDuration, limitDescription } from '../../utils/parse'

import Rating from '../Rating/Rating'
import { useState } from 'react'

export default function Card({item}) {
    const [hovered, setHovered] = useState(false)

    function handleMouseEnter() {
        setHovered(true)
    }
    function handleMouseLeave() {
        setHovered(false)
    }

    return (
        <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='CarContainer'>
            <img src={item.imgURL} alt={item.title} className='Car'  />
            {
                hovered && 
                (
                <div className='CarDescription'>
                    <main>
                        <h3>{item.title}</h3>
                        <p> {parseDuration(item.duration)} - {item.year}  </p>
                        <p>Genrers: {item.genrers.map( (genrer, index) =>{
                            if(index === item.genrers.length - 1) return genrer.name
                            return genrer.name + ', '
                        })}</p>
                        <p>{ limitDescription(item.description) }</p>
                        <div>
                            <p><Rating rating={item.rating}/></p>
                            <p><span style={{fontSize: '16px', color: 'red'}}>♥</span>  {item.likeCount}</p>
                            <p>💬 {item.commentCount}</p>
                        </div>
                    </main>
                </div>
                )
            }
        </div>
    )
}