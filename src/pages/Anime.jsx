


import useSEO from "../Hooks/useSEO.jsx";
import MoviesCards from "../components/Movies/Movies.jsx";
import SeriesCards from "../components/Series/Series.jsx";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
const query = gql`
    query GetGenrers($input: inputGenrer) {
        getGenrers(input: $input) {
            id
            name
        }
    }

`

export default function Anime() {
  useSEO({ title: "Animes", description: "Animes page" });

    const [genrer, setGenrer] = useState(null)

    const { data } = useQuery(query, {
        variables: {
            input: {
                name: "Anime"
            }
        }
    })

    useEffect( () => {
        if(data?.getGenrers && data?.getGenrers.length > 0){
            setGenrer(data.getGenrers[0])
            console.log(data.getGenrers[0])
        }
    }, [data])


  return (
    <div>
        {
            genrer && (
                <>
                    <MoviesCards input={{genrers: [genrer.id]}} />
                    <SeriesCards input={{genrers: [genrer.id]}} />
                </>
            )
        }
          
    </div>
  );
}
