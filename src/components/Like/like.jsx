import { useState, useContext, useEffect } from 'react';
import './like.css';
import HeartLike from '/src/Images/heart-like.svg'
import HeartUnLike from '/src/Images/heart-unlike.svg'
import { UserContext } from '../../Context/userContext';
import { gql, useMutation, useQuery } from '@apollo/client';
import { AlertsContext } from '../../Context/alertContext';


const createLikeMutation = gql`
    mutation CreateLike($input: inputLike) {
      createLike(input: $input) {
        liked
      }
}
`;

const query = gql`
  query GetLike($entityId: ID!) {
    getLike(entityID: $entityId) {
      liked
    }
}
`

const deleteLikeMutation = gql`
  mutation DeleteLike($entityId: ID!) {
    deleteLike(entityID: $entityId) {
      liked
    }
}
`;



function Like({movie, type}) {
        
        const { token } = useContext(UserContext);
        const [like, setLike] = useState(null);

        const [createLike] = useMutation(createLikeMutation);

        const {addAlert} = useContext(AlertsContext)

        const [deleteLike, deleteMutation] = useMutation(deleteLikeMutation);

        const { data } = useQuery(query, {
          variables: {
              entityId: movie?.id
          },
           context: {
            headers: {
              'x-token': token
            }
           }
        })
        useEffect(() => {
          if(data?.getLike){
            setLike(data?.getLike?.liked)
          }
        }, [data])

        const handleClick = async () => {

          if(!token) return addAlert('You must be logged in to like', 'error')
          
          if(like){
            const deletedLike = await deleteLike({
              variables: {
                entityId: movie?.id
              },
              context: {
                headers: {
                  'x-token': token
                }
              }
            })

            setLike(null)
            addAlert('Like removed', 'success')
          } else{
            const { data } = await createLike({
              variables: {
                input: {
                  entityID: movie?.id,
                  entityType: type
                }
              },
              context: {
                headers: {
                  'x-token': token
                }
              }
            })

            setLike(data?.createLike?.liked)
            addAlert('Like added', 'success')
          }
        }

      
        return (
          <div className='like-button' onClick={handleClick}>
            {
              like ? 
                <>
                  <img src={HeartLike} alt="heart-like" /> 
                </>
                   : 
                <>
                  <img src={HeartUnLike} alt="heart-unlike" />
                </>
            }
             <p>Like</p>
          </div>
        );
    }


export default Like;