import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import useSEO from "../Hooks/useSEO";
import { useEffect, useState } from "react";
// import WatchVideo from "../components/Video";
import TopSeries from "../components/TopSeries/TopSeries";
import CardGrid from "../components/CardGrid/";
import Comments from "../components/Comments";
import EpisodeList from "../components/EpisodesList/EpisodeList";
import Like from "../components/Like/like";
import MakeRating from "../components/Rating/MakeRating";

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

const querySeasons = gql`
    query GetSeasons($input: inputSeason) {
        getSeasons(input: $input) {
            description
            id
            likeCount
            number
            title
            episodesCount
        }
}
`;


export default function Season() {

    const { title, season: seasonNumber} = useParams()
    const titleTransformed = title.replace(/-/g, ' ')
    const [serie, setSerie] = useState(null)
    const [season, setSeason] = useState(null)
    useSEO({title: titleTransformed, description: "Serie page"})

    const { data, loading, error } = useQuery(query, {
        variables: {
            input: {
                title: titleTransformed
            }
        }
    })

    const { data: seasons } = useQuery(querySeasons, {
        variables: {
            input: {
                serie: serie?.id,
                number: parseInt(seasonNumber) 
            }
        }
    })


    useEffect( () => {
        if(seasons?.getSeasons && seasons?.getSeasons.length > 0){
            setSeason(seasons.getSeasons[0])
        }
    }, [seasons])

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
                            
                            {
                                season ? <> 
                                            <div style={{width: '100px', display: "flex", gap: "30px"}} >
                                                <Like movie={serie} type={'Serie'}></Like>
                                                <MakeRating movie={serie} type={`Serie`} />
                                            </div>
                                            <EpisodeList season={season} />

                                            <Comments movie={season} type={'Season'} />

                                        </> 
                                        : <h1>Not Found</h1>
                            }
                            
                            
                        </div>
                        
                        
                    </>
                )
            }
        </div>
    )
}