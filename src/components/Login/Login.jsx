import "./Login.css"
import { useState } from "react"
import SignUp from "./SignUp/SignUp"
import SignIn from "./SignIn/SignIn"

export default function Login() {
    const [active, setActive] = useState("")
    return (
        <div className="Body-Login">
            <div className={`container ${active}`} id="container">
                <SignUp/>
                <SignIn/>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Bienvenido</h1>
                            <p>Si ya tienes una cuenta activa puedes iniciar sesion con ella.</p>
                            <button className="hidden" id="login" onClick={ ()=> {
                                setActive("")
                            } }>Iniciar Sesion</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hola, Ships</h1>
                            <p>
                                Aun no tienes una cuenta?<br/>
                                Puedes crear una ahora mismo
                            </p>
                            <button className="hidden" id="register" onClick={ ()=> {
                                setActive("active")
                            } }>Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}