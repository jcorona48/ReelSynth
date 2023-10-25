import Login from "../components/Login/Login"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Context/userContext"
import { useContext } from "react"
import { useEffect } from "react"
export default function LoginPage() {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    useEffect(() => {
        if(user){
            navigate('/')
        }
    }, [user, navigate])
    
    return (
        <Login/>
    )
}