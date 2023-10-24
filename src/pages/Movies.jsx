
import useSEO from "../Hooks/useSEO"
import MoviesCards from "../components/Movies/Movies"
export default function Movies() {
    useSEO({title: "Movies", description: "Movies page"})
    return (
        <MoviesCards/>
    )
}