
import { parseRating } from "../../utils/parse"


export default function Rating({rating}){
    return parseRating(rating).map( (rate, index) => {
        if(rate === 1) return <i className='fas fa-star star' key={index} ></i>
        if(rate === 0) return <i className='far fa-star star' key={index} ></i>
        if(rate === 0.5) return <i className='fas fa-star-half-alt star' key={index}></i>
    })
}