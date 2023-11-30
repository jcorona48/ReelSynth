import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import useSEO from "../Hooks/useSEO";
import { useEffect, useState } from "react";
// import WatchVideo from "../components/Video";
import TopSeries from "../components/TopSeries/TopSeries";
import CardGrid from "../components/CardGrid/";
import Comments from "../components/Comments";
import WatchVideo from "../components/Video"

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


const episodeQuery = gql`
    query GetEpisodes($input: inputEpisode) {
        getEpisodes(input: $input) {
            id
            imgURL
            title
            number
            commentCount
            description
            likeCount
            rating
            year
  }
}
`


export default function Episode() {

    const { title, season: seasonNumber, episode: episodeNumber} = useParams()
    const titleTransformed = title.replace(/-/g, ' ')
    const [serie, setSerie] = useState(null)
    const [season, setSeason] = useState(null)
    const [episode, setEpisode] = useState(null)

    useSEO({title: `${titleTransformed} - Season ${seasonNumber} - Episode ${episodeNumber}`, description: "Episode page"})

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

    const { data: episodes } = useQuery(episodeQuery, {
        variables: {
            input: {
                season: season?.id,
                number: parseInt(episodeNumber)
            }
        }
    })


    useEffect( () => {
        if(seasons?.getSeasons && seasons?.getSeasons.length > 0){
            setSeason(seasons.getSeasons[0])
        }
    }, [seasons])

    useEffect( () => {
        if(episodes?.getEpisodes && episodes?.getEpisodes.length > 0){
            setEpisode(episodes.getEpisodes[0])
        }
    }, [episodes])

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
                                episode && <> 
                                            <h1 className="Titulo-number-episode">Episodio {episode.number}</h1>
                                            <WatchVideo movie={episode} type={'Episode'} />

                                            <Comments movie={episode} type={'Episode'} />

                                        </> 
                            }
                            
                            
                        </div>
                        
                        
                    </>
                )
            }
        </div>
    )
}