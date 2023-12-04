
import useSEO from "../Hooks/useSEO.jsx";
import MoviesCards from "../components/Movies/Movies.jsx";
import SeriesCards from "../components/Series/Series.jsx";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Detail from "../components/details/detail.jsx";

const query = gql`
    query GetStudio($id: ID!) {
        getStudio(id: $id) {
            name
            id
            description
            imgURL
        }
}
`


export default function Studio() {
  useSEO({ title: "Studio", description: "Studio page" });
  const { id } = useParams();

  const { data: studio, loading: loadingStudio, error: errorStudio } = useQuery(query, {
    variables: {
        id
    }
});
console.log(studio)
  return (
    <div>
        
          <>

            {
            loadingStudio && <h1>Loading...</h1>
            }
            {
            errorStudio && <h1>Error...{errorStudio.message}</h1>
            }
                
                {
                    studio?.getStudio ? <Detail item={studio?.getStudio} />: <h1>No hay Productora</h1>
                }

            <MoviesCards input={{studio: id}} />
            
            <SeriesCards input={{studio: id}} />
            
          </>
        
      
    </div>
  );
}
