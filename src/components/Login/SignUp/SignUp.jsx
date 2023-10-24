export default function SignUp(){
    return(
        <div className="form-container sign-up">
            <form>
                <h1>Crear Cuenta</h1>
                <span>Completa el formulario</span>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Apellido"/>
                <input type="text" placeholder="Pais"/>
                <input type="text" placeholder="Nombre de Usuario"/>
                <input type="email" placeholder="Correo Electronico"/>
                <input type="password" placeholder="Contraseña"/>
                <button>Registrarse</button>
            </form>
        </div>
    )
}