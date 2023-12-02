import { useContext, useState, useEffect } from "react";
import useSEO from "../Hooks/useSEO";
import { UserContext } from "../Context/UserContext";
import { gql, useQuery } from "@apollo/client";
import "../components/Favorite/style.css";
import Cards from "../components/Cards/Cards.jsx";
import { AlertsContext } from "../Context/alertContext.jsx";
import { useNavigate } from "react-router-dom";


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
  const { addAlert } = useContext(AlertsContext)

  const navigate = useNavigate()
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
    if (data?.getLikes && !loading) {
      setLikes(data.getLikes)

    }

    if(error){
      addAlert('You Should be logged', 'error')
      navigate('/')
    }

  }, [data, error, loading])



  

  return (
    <div className="Favorites">
      <div className="Titulo-Favorites">
        <h1>Favorites</h1>
      </div>
     
      {
        likes && data?.getLikes && <Cards items={likes}  />
      }

      {
        loading && <h1>Loading...</h1>
      }

      {
        !likes && <div className="alert-movie"><h1>No hay Favorites</h1></div>
      }
    </div>
  );
}