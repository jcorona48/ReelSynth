import useSEO from "../Hooks/useSEO.jsx";
import MoviesCards from "../components/Movies/Movies.jsx";
import SeriesCards from "../components/Series/Series.jsx";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const query = gql`
    query GetGenrer($id: ID!) {
        getGenrer(id: $id) {
            name
            description
            id
        }
}
`

export default function Genrer() {
  useSEO({ title: "Genrer", description: "Genrers page" });
  const { id } = useParams();
    const { data: genrer, loading: loadingGenrer, error: errorGenrer } = useQuery(query, {
        variables: {
            id
        }
    });


  return (
    <div>
        <>
            {
                loadingGenrer && <h1>Loading...</h1>
                }
                {
                errorGenrer && <h1>Error...{errorGenrer.message}</h1>
            }
            
            {
                genrer?.getGenrer ? <h1>Genrer: {genrer.getGenrer.name}</h1> : <h1>No hay genrer</h1>
            }
            
            <MoviesCards input={{genrers: [id]}} />
            
            <SeriesCards input={{genrers: [id]}} />
            
          </>
        
      
    </div>
  );
}
