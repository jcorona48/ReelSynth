
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: import.meta.env.VITE_API_URL || import.meta.env.VITE_ALTERNATIVE_API_URL || 'http://localhost:4000',
        fetch
    })
})

export default client