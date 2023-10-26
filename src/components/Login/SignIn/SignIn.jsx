
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
    const [Login] = useMutation(query)
    useEffect(() =>{
        if(token){
            addAlert('Inicio de sesion exitoso', 'success')
        }
    },[token])
    const handleSubmit = async (e) => {
        
            e.preventDefault()
            const form = new FormData(e.target)
            const data = Object.fromEntries(form)
            const {userName, password} = data
    
            // username es un email?
            const isEmail = /\S+@\S+\.\S+/.test(userName)
    
            let token = null
            if(isEmail){
                console.log('es un email')
                token = await Login({
                    variables: {
                        input: {
                            email: userName,
                            password
                        }
                    }
                })
            }else{
                console.log('es un username')
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
                console.log(token.data.login.token)
                setToken(token.data.login.token)
                localStorage.setItem('x-token', token.data.login.token)
            }   
    }
    return(
        <div className="form-container sign-in">
            <form onSubmit={handleSubmit} aria-label="Iniciar Sesion">
                <h1>Iniciar Sesion</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>Inicia Sesion con tu Correo y Contraseña</span>
                <input type="text" placeholder="Correo Electronico" name="userName"/>
                <input type="password" placeholder="Contraseña" name="password"/>
                <a href="#">Haz olvidado tu Contraseña?</a>
                <button >Iniciar Sesion</button>
            </form>
        </div>
    )
}