import './SeasonList.css'
import { useQuery, gql } from '@apollo/client'
import Seasons from '../Seasons/Seasons';


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

export default function SeasonList({serie}) {
    const { data: seasons, loading: loadingSeasons, error: errorSeasons } = useQuery(querySeasons, {
        variables: {
            input: {
                serie: serie?.id
            }
        }
    
    })
    return (
        <div className='SeasonList'>
            <>
                <h1 className="titulo">List Seasons</h1>
                {
                    loadingSeasons && <h1>Loading...</h1>
                }
                {
                    errorSeasons && <h1>Error...{errorSeasons.message}</h1>
                }
                {
                    seasons?.getSeasons && seasons?.getSeasons.length > 0 ? <Seasons items={seasons.getSeasons} type='season' /> : <h1 className='alert-genrers'>No hay seasons</h1>
                }
            </>
        </div>
    )
}