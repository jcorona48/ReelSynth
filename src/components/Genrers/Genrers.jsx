import './Genrers.css'
import { useQuery, gql } from '@apollo/client'
import Blocks from '../Blocks/Blocks'


const GET_Genrers = gql`
    query GetGenrers {
        getGenrers {
        id
        title
        description
        }
    }
`;

export default function Genrers() {
    const { data: genrers, loading: loadingGenrers, error: errorGenrers } = useQuery(GET_Genrers)
    return (
        <div>
            <>
                <h1 id="titulo" style={{ paddingLeft: "10px" }}>Genrers</h1>
                {
                    loadingGenrers && <h1>Loading...</h1>
                }
                {
                    errorGenrers && <h1>Error...{errorGenrers.message}</h1>
                }
                {
                    genrers?.getGenrers && genrers?.getGenrers.length > 0 ? <Blocks items={genrers.getGenrers} /> : <h1>No hay generos</h1>
                }
            </>
        </div>
    )
}