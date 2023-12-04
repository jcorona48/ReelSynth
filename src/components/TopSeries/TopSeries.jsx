import "./TopSeries.css";
import { useQuery, gql } from "@apollo/client";
import ContentsOptions from "../ContentOption/ContentsOptions";

const query = gql`
 query GetTopSeries($top: Int!) {
   getTopSeries(top: $top) {
            imgURL
            title
            rating
            seasons
        }
    }
`

export default function TopSeries() {
    const { data: series, loading: loadingSeries, error: errorSeries } = useQuery(query,{
        variables: {
            top: 3
        }
    });
    return (
        <div>
            <>
            <h1 id="titulo" style={{ paddingLeft: "10px" }} className="Titulo">Top Series</h1>
            {
                loadingSeries && <h1>Loading...</h1>
            }
            {
                errorSeries && <h1>Error...{errorSeries.message}</h1>
            }
            {
                series?.getTopSeries && series?.getTopSeries.length > 0 ? <ContentsOptions items={series.getTopSeries} type="serie"/> : <h1>No hay peliculas</h1>
            }
            </>
        </div>
    );
}