
import { useQuery, gql } from "@apollo/client";

import Cards from "../Cards/Cards.jsx";

const Get_Series = gql`
  query GetSeries($input: inputSerie) {
    getSeries(input: $input) {
      id
      title
      description
      rating
      likeCount
      year
      commentCount
      imgURL
      genrers{
        name
      }
    }
  }
`;

export default function Series({ title = null}) {
  const { data: series, loading: loadingSeries, error: errorSeries } = useQuery(Get_Series, {
    variables: {
      input: {
        title: title
      }
    }
  });
  return (
          <>

            <h1 style={{ paddingLeft: "10px" }}>Series</h1>
            {
              loadingSeries && <h1>Loading...</h1>
            }
            {
              errorSeries && <h1>Error...{errorSeries.message}</h1>
            }
            {
              series?.getSeries && series?.getSeries.length > 0 ? <Cards items={series.getSeries} /> : <h1>No hay series</h1>
            }
            
          </>
        
  );
}
