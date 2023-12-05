import { useContext, useState, useEffect } from "react";
import useSEO from "../Hooks/useSEO";
import { UserContext } from "../Context/userContext";
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
    <div>
      <>
        <main className="Page-Favorites">
          <articule className="container-page-Favorites">
            <h1 id="titulo" className="Page-Favorites-titulo">Favorites</h1>
            <div className="page-favorites">
              {
                loading && <h1>Loading...</h1>
              }
              {
                error && <h1>Error...{error.message}</h1>
              }
              {
                likes?.length > 0 ? <Cards items={likes} type="like" /> : <h1>No hay Likes</h1>
              }
            </div>
          </articule>
        </main>
      </>
    </div>
  );
}