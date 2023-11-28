import { useParams } from "react-router-dom";

export default function Season() {

    const params = useParams();
    console.log(params);
    console.log("Hola");
    
    const ruts = params.season.split('-');
    const season = ruts[1];

    return (
        <div>
            <h1>Season {season}</h1>
        </div>
    )
}