import useSEO from "../Hooks/useSEO";
import ProducersCard from "../components/Producers/Producers.jsx";

export default function Producers() {
    useSEO({ title: "Producers", description: "Producers page"});

    return (
        <div>
            <ProducersCard />
        </div>
    )
    }