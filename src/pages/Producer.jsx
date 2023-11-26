import useSEO from "../Hooks/useSEO.jsx";
import MoviesCards from "../components/Movies/Movies.jsx";
import SeriesCards from "../components/Series/Series.jsx";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const query = gql`
    query GetProducer($id: ID!) {
        getProducer(id: $id) {
            name
            id
        }
}
`


export default function Producer() {
  useSEO({ title: "Producer", description: "Producer page" });
  const { id } = useParams();
  const { data: producer, loading: loadingProducer, error: errorProducer } = useQuery(query, {
    variables: {
        id
    }
});
  return (
    <div>
        
          <>

          {
                loadingProducer && <h1>Loading...</h1>
                }
                {
                errorProducer && <h1>Error...{errorProducer.message}</h1>
            }
            
            {
                producer?.getProducer ? <h1>Productora: {producer.getProducer.name}</h1> : <h1>No hay Productora</h1>
            }
            
            <MoviesCards input={{producer: id}} />
            
            <SeriesCards input={{producer: id}} />
            
          </>
        
      
    </div>
  );
}