import { UserContext } from "../../../Context/userContext"
import { useContext, useEffect } from "react"
import { useMutation, gql } from "@apollo/client"
import { AlertsContext } from "../../../Context/alertContext"


const query = gql`
    mutation Signup($input: UserInput!) {
    signup(input: $input) {
        token
    }
    }
`

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
    //REGISTRAR USUARIO
    const {addAlert} = useContext(AlertsContext)
    const {token, setToken} = useContext(UserContext)
    const [Signup, mutation] = useMutation(query)

    useEffect(() =>{
        if(mutation.error){
            addAlert(mutation.error.message, 'error')
        }


    },[token,mutation.loading])

    const handleSubmit = async (e) => {
            e.preventDefault()
            const form = new FormData(e.target)
            
            const data = Object.fromEntries(form)
            const {firstName, lastName, userName, email, password, confirmPassword} = data
    
            let token = null
            if(password === confirmPassword){
                token = await Signup({
                    variables: {
                        input: {
                            firstName,
                            lastName,
                            userName,
                            email,
                            password
                        }
                    }
                })
            }else{
                addAlert('Las contraseñas no coinciden', 'error')
            }
            if(token){
                setToken(token.data.signup.token)
                addAlert('Registro exitoso', 'success')
            }
        }



    return(
        <div className="form-container sign-up">
            <form onSubmit={handleSubmit} aria-label="Crear Cuenta" autoSave="off">
                <h1>Crear Cuenta</h1>
                <span>Completa el formulario</span>
                <input name="firstName" type="text" placeholder="Nombre" className="input"/>
                <input name="lastName" type="text" placeholder="Apellido" className="input"/>
                <select name="countrys" id="" required className="input" defaultValue="country">
                    <option disabled value="country" className="country">Selecciona tu pais</option>
                    {
                        countrys.map((country) => (
                            <option key={country.id} value={country.name}>{country.name}</option>
                        ))
                    }
                </select>
                <input name="userName" type="text" placeholder="Nombre de Usuario" required className="input"/>
                <input name="email" type="email" placeholder="Correo Electronico" required className="input"/>
                <input name="password" type="password" placeholder="Contraseña" required className="input"/>
                <input name="confirmPassword" type="password" placeholder="Contraseña" required className="input"/>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}