import './Car.css'
import { parseDuration, limitDescription, parseRating } from '../../utils/parse'
import { useState } from 'react'



export default function Car({item}) {
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
                            <p>{parseRating(item.rating).map( (rate, index) => {
                                if(rate === 1) return <i className='fas fa-star star' key={index} ></i>
                                if(rate === 0) return <i className='far fa-star star' key={index} ></i>
                                if(rate === 0.5) return <i className='fas fa-star-half-alt star' key={index}></i>
                            })}</p>
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