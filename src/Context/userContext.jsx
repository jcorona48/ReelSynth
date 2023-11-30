
import { createContext, useEffect, useContext } from "react";
import useUser from "../Hooks/useUser";
import useToken from "../Hooks/useToken";
import { AlertsContext } from "./alertContext";
export const UserContext = createContext()



export default function UserProvider({children}) {
    const {token, setToken, deleteToken} = useToken()

    const {user, setUser, loading, setLoading} = useUser(token)
    useEffect(() =>{
        if(!token){
            setUser(null)
        }
    },[token])

    useEffect(() =>{
        if(!loading && !user && token){
            deleteToken()
            addAlert('Sesion expirada', 'warning')
        }
    },[loading, user])

    useEffect(() =>{
        if(localStorage.getItem('x-token')){
            setToken(localStorage.getItem('x-token'))
        }
    },[])

    const {addAlert} = useContext(AlertsContext)


    return (
        <UserContext.Provider value={{user, setUser, loading, setLoading, token, setToken, deleteToken}}>
            {children}
        </UserContext.Provider>
    )
}