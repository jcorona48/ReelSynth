
import { UserContext } from "../../../Context/userContext"
import { useContext } from "react"
import { useMutation, gql } from "@apollo/client"


const query = gql`

    mutation Login($input: LoginInput!) {
        login(input: $input) {
                token
            }
    }
    
`

export default function SignIn(){
    const {setToken} = useContext(UserContext)
    const [Login, loading, error] = useMutation(query)

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

        if(token) setToken(token.data.login.token)
        console.log(token?.data?.login?.token)
        console.log(error)
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