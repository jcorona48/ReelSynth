import { useQuery, gql } from "@apollo/client";
import Cards from "../Cards/Cards";

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

export default function PageTopSeries() {
    const { data: series, loading: loadingSeries, error: errorSeries } = useQuery(query,
        {
            variables: {
                top: 8
            }
        });

    return (
        <div>
            <>
            <main className="Page-Top-Movies">
                <articule className="container-page-topmovies">
                    <h1 id="titulo" className="Page-titulo">Top Series</h1>
                    <div className="page-topmovies">
                    {
                        loadingSeries && <h1>Loading...</h1>
                    }
                    {
                        errorSeries && <h1>Error...{errorSeries.message}</h1>
                    }
                    {
                        series?.getTopSeries && series?.getTopSeries.length > 0 ? <Cards items={series.getTopSeries} type="serie" /> : <h1>No hay Series</h1>
                    }
                    </div>
                </articule>
            </main>
            </>
        </div>
    );
}