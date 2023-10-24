
export default function ToggleContainer({ hook }){
            return(
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Bienvenido</h1>
                                <p>Si ya tienes una cuenta activa puedes iniciar sesion con ella.</p>
                                <button className="hidden" id="login" onClick={ ()=> {
                                    hook("")
                                } }>Iniciar Sesion</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hola, Ships</h1>
                                <p>
                                    Aun no tienes una cuenta?<br/>
                                    Puedes crear una ahora mismo
                                </p>
                                <button className="hidden" id="register" onClick={ ()=> {
                                    hook("active")
                                } }>Registrarse</button>
                            </div>
                        </div>
                    </div>
                )
}