import useSEO from "../Hooks/useSEO"
import SeriesCards from "../components/Series/Series.jsx";
export default function Series() {
    useSEO({title: "Series", description: "Series page"})
    return (
      <SeriesCards />
    )
}