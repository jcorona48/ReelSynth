import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import useSEO from "../Hooks/useSEO";
import { useEffect, useState } from "react";
// import WatchVideo from "../components/Video";
import TopSeries from "../components/TopSeries/TopSeries";
import CardGrid from "../components/CardGrid/";
import Comments from "../components/Comments";
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

    const { data: dataSeasons } = useQuery(querySeasons, {
        variables: {
            input: {
                serie: serie?.id
            }
        }
    })

    useEffect( () => {
        if(data?.getSeries && data?.getSeries.length > 0){
            setSerie(data.getSeries[0])
            console.log(data.getSeries[0])
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
                            {dataSeasons && dataSeasons?.getSeasons && dataSeasons.getSeasons.map(season => {
                                return (
                                    <div key={season.id}>
                                        <h1>{season.title}</h1>
                                        <h2>{season.description}</h2>
                                        <h3>Season number: {season.number}</h3>
                                        <h4>Epidoses: {season.episodesCount}</h4>
                                    </div>
                                )
                            })
                            }
                            <Comments movie={serie} type={'Serie'} />
                        </div>
                        
                        
                    </>
                )
            }
        </div>
    )
}