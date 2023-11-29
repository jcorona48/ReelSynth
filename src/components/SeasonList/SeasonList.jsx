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

export default function SeasonList() {
    const { data: seasons, loading: loadingSeasons, error: errorSeasons } = useQuery(querySeasons)
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
                    seasons?.getSeasons && seasons?.getSeasons.length > 0 ? <Seasons items={seasons.getSeasons} type='seasons' /> : <h1 className='alert-genrers'>No hay seasons</h1>
                }
            </>
        </div>
    )
}