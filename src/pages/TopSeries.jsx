import useSEO from "../Hooks/useSEO";
import PageTopSeries from "../components/TopSeries/PageTopSeries";

export default function TopSeries() {
    useSEO({ title: "Top Series", description: "Top Series page" });

    return (
        <div>
            <>
                <PageTopSeries />
            </>
        </div>
    );
}