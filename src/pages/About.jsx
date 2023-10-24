import useSEO from "../Hooks/useSEO"


export default function About() {
    useSEO({title: "About", description: "About page"})
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}