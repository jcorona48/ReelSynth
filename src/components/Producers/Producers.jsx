import './Producers.css'
import { useQuery, gql } from '@apollo/client'
import Blocks from '../Blocks/Blocks'


const GET_Producers = gql`
    query getProducers {
        getProducers {
            id
            imgURL
            name
            description
        }
    }
`;

export default function Producers() {
    const { data: producers, loading: loadingProducers, error: errorProducers } = useQuery(GET_Producers)
    return (
        <div className='Producers'>
            <>
                <h1 id="titulo" style={{ paddingLeft: "10px" }}>Producers</h1>
                {
                    loadingProducers && <h1>Loading...</h1>
                }
                {
                    errorProducers && <h1>Error...{errorProducers.message}</h1>
                }
                {
                    producers?.getProducers && producers?.getProducers.length > 0 ? <Blocks items={producers.getProducers} /> : <h1 className='alert-producers'>No hay Productores</h1>
                }
            </>
        </div>
    )
}