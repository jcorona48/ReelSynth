
import { parseRating } from "../../utils/parse"

import { useMemo } from "react"

export default function Rating({rating}){
    
    
    const ratingTransformed = useMemo( () => {
    if(!rating && rating != 0) return null
    const ratingTransformed = parseRating(rating)
    console.log(ratingTransformed) // [1, 1, 1, 1, 0.5]
    return parseRating(rating).map( (rate, index) => {
        if(rate === 1) return <i className='fas fa-star star' key={index} ></i>
        else if(rate === 0) return <i className='fal fa-star star' key={index} ></i>
        else{
            return <i className='fas fa-star-half-alt star' key={index}></i>
    }
}
    )
}, [rating])
    
        return(
            <>
                {ratingTransformed}
            </>
        )
    }