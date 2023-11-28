import './Genrers.css'
import { useQuery, gql } from '@apollo/client'
import Blocks from '../Blocks/Blocks'


const GET_Genrers = gql`
    query GetGenrers {
        getGenrers {
        id
        name
        description
        }
    }
`;

export default function Genrers() {
    const { data: genrers, loading: loadingGenrers, error: errorGenrers } = useQuery(GET_Genrers)
    return (
        <div className='Genrers'>
            <>
                <h1 className="titulo">Genrers</h1>
                {
                    loadingGenrers && <h1>Loading...</h1>
                }
                {
                    errorGenrers && <h1>Error...{errorGenrers.message}</h1>
                }
                {
                    genrers?.getGenrers && genrers?.getGenrers.length > 0 ? <Blocks items={genrers.getGenrers} type='genrers' /> : <h1 className='alert-genrers'>No hay generos</h1>
                }
            </>
        </div>
    )
}