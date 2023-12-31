
import { UserContext } from "../../../Context/userContext"
import { useContext, useEffect } from "react"
import { useMutation, gql } from "@apollo/client"
import { AlertsContext } from "../../../Context/alertContext"


const query = gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
                token
            }
    }
`

export default function SignIn(){
    const {addAlert} = useContext(AlertsContext)
    const {token, setToken} = useContext(UserContext)
    const [Login, mutation] = useMutation(query)

    useEffect(() =>{
        if(mutation.error){
            addAlert(mutation.error.message, 'error')
        }

    },[token, mutation.loading])

    const handleSubmit = async (e) => {
            e.preventDefault()
            const form = new FormData(e.target)
            
            const data = Object.fromEntries(form)
            const {userName, password} = data
    
            // username es un email?
            const isEmail = /\S+@\S+\.\S+/.test(userName)
    
            let token = null
            if(isEmail){
                token = await Login({
                    variables: {
                        input: {
                            email: userName,
                            password
                        }
                    }
                })
            }else{
                token = await Login({
                    variables: {
                        input: {
                            userName,
                            password
                        }
                    }
                })
            }
    
            if(token){
                setToken(token.data.login.token)
                addAlert('Inicio de sesion exitoso', 'success')
            }   
    }
    return(
        <div className="form-container sign-in">
            <form onSubmit={handleSubmit} aria-label="Iniciar Sesion" autoSave="off">
                <h1>Sign In</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fab fa-google"></i></a>
                    <a href="#" className="icon"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>Login with your Email/Username and Password</span>
                <input type="text" placeholder="Email/Username" name="userName" autoCorrect="off" required />
                <input type="password" placeholder="Password" name="password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}