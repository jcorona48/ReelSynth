
const countrys = [
    {name: 'Colombia', id: crypto.randomUUID()},
    {name: 'Argentina', id: crypto.randomUUID()},
    {name: 'Brasil', id: crypto.randomUUID()},
    {name: 'Chile', id: crypto.randomUUID()},
    {name: 'Peru', id: crypto.randomUUID()},
    {name: 'Republica Dominicana', id: crypto.randomUUID()},
    {name: 'Ecuador', id: crypto.randomUUID()}
]


export default function SignUp(){
    return(
        <div className="form-container sign-up">
            <form>
                <h1>Crear Cuenta</h1>
                <span>Completa el formulario</span>
                <input name="firstName" type="text" placeholder="Nombre" className="input"/>
                <input name="lastName" type="text" placeholder="Apellido" className="input"/>
                <select name="countrys" id="" required className="input">
                    <option value="country" disabled selected>Selecciona tu pais</option>
                    {
                        countrys.map((country) => (
                            <option key={country.id} value={country.name}>{country.name}</option>
                        ))
                    }
                </select>
                <input name="username" type="text" placeholder="Nombre de Usuario" required className="input"/>
                <input name="email" type="email" placeholder="Correo Electronico" required className="input"/>
                <input name="password" type="password" placeholder="Contraseña" required className="input"/>
                <input name="ConfirmPassword" type="password" placeholder="Contraseña" required className="input"/>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}