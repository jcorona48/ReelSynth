import './SeasonList.css'
import { useQuery, gql } from '@apollo/client'
import Seasons from '../Seasons/Seasons';


const query = gql`
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
`;

export default function EpisodeList({season}) {
    const { data: episodes, loading: loadingEpisodes, error: errorEpisodes } = useQuery(query, {
        variables: {
            input: {
                season: season?.id
            }
        }
    
    })
    
    return (
        <div className='SeasonList'>
            <>
                <h1 className="titulo">Season {season.number}</h1>
                {
                    loadingEpisodes && <h1>Loading...</h1>
                }
                {
                    errorEpisodes && <h1>Error...{errorEpisodes.message}</h1>
                }
                {
                    episodes?.getEpisodes && episodes?.getEpisodes.length > 0 ? <Seasons items={episodes.getEpisodes} type='episode' /> : <h1 className='alert-genrers'>No hay Episodios</h1>
                }
            </>
        </div>
    )
}