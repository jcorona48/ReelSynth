import './MakeRating.css';
import { useState, useContext, useEffect } from 'react';
import { AlertsContext } from '../../Context/alertContext';
import { gql, useMutation, useQuery } from '@apollo/client';
import { UserContext } from '../../Context/userContext';


const createRateMutation = gql`
    mutation CreateRate($input: inputRate) {
      createRate(input: $input) {
        rate
      }
}
`;

const query = gql`
    query GetRate($entityId: ID!) {
        getRate(entityID: $entityId) {
            rate
        }
    }
`

const updateRateMutation = gql`
    mutation UpdateRate($entityId: ID!, $rate: Float) {
    updateRate(entityID: $entityId, rate: $rate) {
      rate
    }
}
`;


export default function MakeRating({movie, type}) {
    const { token } = useContext(UserContext);
    const {addAlert} = useContext(AlertsContext)
    const [rating, setRating] = useState(0);
    const totalStars = 5;

    const [createRate] = useMutation(createRateMutation);

    const [updateRate] = useMutation(updateRateMutation);

    const { data} = useQuery(query, {
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
        if(data?.getRate){
            
            setRating(data?.getRate?.rate)
        }
      }, [data])
    
    

    const handleClick = async (starNumber) => {
        if(!token) return addAlert('You must be logged in to like', 'error')

        if(rating){
            const updatedRate = await updateRate({
                variables: {
                    entityId: movie?.id,
                    rate: starNumber
                },
                context: {
                    headers: {
                      'x-token': token
                    }
                   }
            })

            if(updatedRate){
                console.log(updatedRate)
                addAlert('Rating updated', 'success')
                setRating(starNumber);
            }
        }else{
            const { data } = await createRate({
                variables: {
                  input: {
                    entityID: movie?.id,
                    entityType: type,
                    rate: starNumber
                  }
                },
                context: {
                  headers: {
                    'x-token': token
                  }
                }
              })
              if(data?.createRate){
                console.log(data?.createRate.rate)
                addAlert('Rating created', 'success')
                setRating(starNumber);
              }
        }
    };

    return (
        <div className='container-stars'>
        {[...Array(totalStars)].map((_, index) => (
            <span className='star'
            key={index}
            onClick={() => handleClick(index + 1)}
            style={{
                color: index < rating ? 'gold' : 'gray',
            }}
            >
            &#9733;
            </span>
        ))}
        </div>
    );
}