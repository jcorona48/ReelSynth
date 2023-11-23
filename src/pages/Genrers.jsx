import useSEO from "../Hooks/useSEO"
import GenrersCard from "../components/Genrers/Genrers"

export default function Genrers() {
    useSEO({title: "Genrers", description: "Genrers page"})
    
    return (
        <div>
            <GenrersCard/>
        </div>
    )
}