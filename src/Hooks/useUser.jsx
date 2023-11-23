
import {useState, useEffect} from 'react'
import {useQuery, gql} from '@apollo/client'

const query = gql`
    query GetUserByToken($token: String) {
        getUserByToken(token: $token) {
            id
            firstName
            lastName
            userName
            email
            role {
            id
            name
            }
            imgURL
            country {
            id
            name
            }
            
        }
        }
`

export default function useUser(token){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const {data, loading: queryLoading} = useQuery(query, {
        variables: {
            token
        }
    })
    console.log(data)
    useEffect(() =>{
        if(data){
            console.log(data)
            setUser(data.getUserByToken)
            setLoading(false)
        }
        if(!queryLoading){
            setLoading(false)
        }
    },[data, queryLoading])
    return {user, setUser, loading, setLoading}
}