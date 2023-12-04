import './studios.css'
import { useQuery, gql } from '@apollo/client'
import MiniDetails from '../MiniDeatils/details/MiniDetails.jsx';

const GET_Studio = gql`
    query getStudios {
        getStudios {
            id
            name
            description
            imgURL
        }
    }
`;

export default function Studios() {
    const { data: studios, loading: loadingStudios, error: errorStudios } = useQuery(GET_Studio)
    return (
        <div className='container-Studios'>
            <>
                <h1 id="titulo">Studios</h1>
                {
                    loadingStudios && <h1>Loading...</h1>
                }
                {
                    errorStudios && <h1>Error...{errorStudios.message}</h1>
                }
                {
                    studios?.getStudios && studios?.getStudios.length > 0 ? <MiniDetails items={studios.getStudios} /> : <div className='container-alert-studios'><h1>No hay Studios</h1></div>
                }
            </>
        </div>
    )
}