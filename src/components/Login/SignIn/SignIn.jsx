
import { UserContext } from "../../../Context/userContext"
import { useContext } from "react"
import { useMutation, gql } from "@apollo/client"



export default function SignIn(){
    // const {setToken} = useContext(UserContext)

    
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