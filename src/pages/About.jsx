import useSEO from "../Hooks/useSEO"
import Company from "../components/Company/Company"

export default function About() {
    useSEO({title: "About", description: "About page"})
    return (
        <Company />
    )
}