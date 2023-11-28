import { useParams } from "react-router-dom";

export default function Serie() {

    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Serie</h1>
        </div>
    )
}