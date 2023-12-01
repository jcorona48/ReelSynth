import './Series.css'
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
      seasons
      genrers{
        name
      }
    }
  }
`;

export default function Series({ input = { }, seriesDefault = [] }) {
  const { data: series, loading: loadingSeries, error: errorSeries } = useQuery(Get_Series, {
    variables: {
      input
    }
  });
  return (
    <div className="Series">
      <>          
        <div className="titulo">
          <h1 id='titulo'>Series</h1>
        </div>
        {
          seriesDefault.length > 0 ? <Cards items={seriesDefault} type={'serie'} /> : (<>
          
          {
            loadingSeries && <h1>Loading...</h1>
          }
          {
            errorSeries && <h1>Error...{errorSeries.message}</h1>
          }
          {
            series?.getSeries && series?.getSeries.length > 0 ? <Cards items={series.getSeries} type={'serie'} /> : <div className="alert-series"><h1>No hay series</h1></div>
          }
          </>)
        }
          
      </>
    </div>
  );
}
