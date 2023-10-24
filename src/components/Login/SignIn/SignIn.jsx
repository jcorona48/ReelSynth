export default function SignIn(){
    return(
        <div className="form-container sign-in">
            <form>
                <h1>Iniciar Sesion</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>Inicia Sesion con tu Correo y Contraseña</span>
                <input type="email" placeholder="Correo Electronico"/>
                <input type="password" placeholder="Contraseña"/>
                <a href="#">Haz olvidado tu Contraseña?</a>
                <button>Iniciar Sesion</button>
            </form>
        </div>
    )
}