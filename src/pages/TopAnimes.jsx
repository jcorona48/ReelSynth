import useSEO from "../Hooks/useSEO";

export default function TopAnime() {
    useSEO({ title: "Top Anime", description: "Top Anime page" });
    
    return (
        <div>
        <h1>Top Anime</h1>
        </div>
    );
    }