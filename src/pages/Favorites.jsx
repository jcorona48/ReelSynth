import { useContext, useState, useEffect } from "react";
import useSEO from "../Hooks/useSEO";
import MoviesCards from "../components/Movies/Movies";
import SeriesCard from "../components/Series/Series";
import { UserContext } from "../Context/UserContext";
import { gql, useQuery } from "@apollo/client";
import "../components/Favorite/style.css";
import Cards from "../components/Cards/Cards.jsx";


const query = gql`
  query GetLikes($input: inputLikes) {
    getLikes(input: $input) {
      entityType
      entityID {
        id
        title
        description
        rating
        likeCount
        year
        commentCount
        imgURL
        seasons
        genrers{
          name
        }
        duration
      }
    }
  }
`;

export default function Follow() {
  useSEO({ title: "Favorites", description: "Favorites page" });

  const { token } = useContext(UserContext)

  const [likes, setLikes] = useState(null)



  const { data, loading, error } = useQuery(query, {
    variables: {
      input: {
        entityType: ["Movie", "Serie"]
      },
    },
    context:{
      headers:{
        'x-token': token
      }
    }
  });
  
  useEffect(() => {
    if (data?.getLikes) {
      // Separate movies and series

      console.log(data.getLikes)

      const grouped = data.getLikes.reduce((acc, curr) => {
        const key = curr.entityType;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(curr.entityID);
        return acc;
      }, {});

      console.log(grouped)
      setLikes(data.getLikes)

    }
  }, [data])



  return (
    <div className="Favorites">
      <div className="Titulo-Favorites">
        <h1>Favorites</h1>
      </div>
     
      {
        likes && data?.getLikes && <Cards items={likes}  />
      }
    </div>
  );
}