import useSEO from "../Hooks/useSEO";
import { useQuery, gql } from "@apollo/client";
import Cards from "../components/Cards/Cards";

const query = gql`
    query GetSeries($top: Int!) {
    getTopSeries(top: $top) {
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

export default function TopSeries() {
    useSEO({ title: "Top Series", description: "Top Series page" });
    const { data: series, loading: loadingSeries, error: errorSeries } = useQuery(query,
        {
            variables: {
                top: 0
            }
        });

    return (
        <div>
            <>
            <h1 id="titulo" className="Titulo">Top Series</h1>
            {
                loadingSeries && <h1>Loading...</h1>
            }
            {
                errorSeries && <h1>Error...{errorSeries.message}</h1>
            }
            {
                series?.getTopSeries && series?.getTopSeries.length > 0 ? <Cards items={series.getTopSeries} type="serie" /> : <h1>No hay Series</h1>
            }
            </>
        </div>
    );
    }