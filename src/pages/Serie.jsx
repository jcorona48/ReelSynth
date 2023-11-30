import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import useSEO from "../Hooks/useSEO";
import { useEffect, useState } from "react";
// import WatchVideo from "../components/Video";
import TopSeries from "../components/TopSeries/TopSeries";
import CardGrid from "../components/CardGrid/";
import Comments from "../components/Comments";
import SeasonList from "../components/SeasonList/SeasonList";
import Like from "../components/Like/like";


const query = gql`
    query GetSeries($input: inputSerie) {
        getSeries(input: $input) {
            id
            title
            description
            likeCount
            commentCount
            rating
            year
            imgURL
            genrers {
                name
            }
            seasons
            studio {
                name
                producer {
                    name
                }
            }
        }
    }
`;





export default function Serie() {

    const { title } = useParams()
    const titleTransformed = title.replace(/-/g, ' ')
    const [serie, setSerie] = useState(null)
    useSEO({title: titleTransformed, description: "Serie page"})

    const { data, loading, error } = useQuery(query, {
        variables: {
            input: {
                title: titleTransformed
            }
        }
    })


    useEffect( () => {
        if(data?.getSeries && data?.getSeries.length > 0){
            setSerie(data.getSeries[0])
        }
    }, [data])

    return (
        <div className="Fondo">
            
            { loading && <h1>Loading...</h1> }
            { error && <h1>Error...{error.message}</h1> }
            { data?.getSeries && data?.getSeries.length === 0 && <h1>Not Found</h1>}

            {
                data?.getSeries && data?.getSeries.length > 0 && serie && (
                    <>
                        <img className="fondo-movie" src={serie.imgURL} />
                        <div className="columns-container"> 
                                <CardGrid data={serie} type='serie' />
                                <TopSeries data={serie} type='serie' />
                        </div>
                        
                        <div style={{width: '100%', maxWidth: '1080px'}}>
                        <div style={{width: '100px'}} >
                            <Like movie={serie} type={'Serie'}></Like>
                        </div>
                            <SeasonList serie={serie} />
                           
                            
                            <Comments movie={serie} type={'Serie'} />
                        </div>
                        
                        
                    </>
                )
            }
        </div>
    )
}