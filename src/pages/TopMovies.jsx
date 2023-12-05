import useSEO from "../Hooks/useSEO";
import PageTopMovies from "../components/TopMovies/PageTopMovies";

export default function TopMovies() {
    useSEO({ title: "Top Movies", description: "Top Movies page" });

    return (
        <div>
            <>
                <PageTopMovies />
            </>
        </div>
    );
    }