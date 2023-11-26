import './Card.css'
import { parseDuration } from '../../utils/parse'

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
                hovered ? (
                    <div className='CarDescription'>
                        <main>
                            <div className='card-text'>
                            <h3>{item.title}</h3>
                            <p> {parseDuration(item.duration)} - {item.year}  </p>
                            <p>Genrers: {item.genrers.map( (genrer, index) =>{
                                if(index === item.genrers.length - 1) return genrer.name
                                return genrer.name + ', '
                            })}</p>
                            <p>{ item.description }</p>
                            </div>
                            <div className='card-footer'>
                                <p><Rating rating={item.rating}/></p>
                                <p><span style={{fontSize: '16px', color: 'red'}}>♥</span>  {item.likeCount}</p>
                                <p>💬 {item.commentCount}</p>
                            </div>
                        </main>
                    </div>
                    ) : (
                        <div className='Preview-Card'>
                            <div>
                                <p>
                                    { item.title}
                                </p>
                            </div>
                        </div>
                    )
                
            }
        </div>
    )
}