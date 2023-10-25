
import { UserContext } from "../../../Context/userContext"
import { useContext } from "react"

const userLogin = {
    role: 'Admin',
    email: 'joaneliasc86@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/63413974?v=4',
    token: '1234567890'
}

export default function SignIn(){
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const data = Object.fromEntries(form)
        const {userName, password} = data
        // Usuario logeado correctamente
        setUser({
            userName,
            ...userLogin
        })
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