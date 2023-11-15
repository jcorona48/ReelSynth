import './menu-rigth.css'
import { Link } from "react-router-dom";
import { useContext, useMemo } from 'react';
import { UserContext } from '../../../Context/userContext';
import { AlertsContext } from '../../../Context/alertContext';

export default function ShowMenuRigth(){
    const {user, deleteToken} = useContext(UserContext)
    const {addAlert} = useContext(AlertsContext)

    const optionsRigth = useMemo( () => [
        { label: "Profile", value: "", icon: "" },
        { label: "Follow", value: "", icon: "" },
        { label: "Sign Out", value: "", icon: "" }
    ]) ;

    return(
        <div className="container-session">
            {
                user ? <a className='logout' onClick={() =>{ deleteToken(); addAlert("Cerrado de Sesion", "error") }} ><i className='fas fa-sign-out ' ></i> <span >{`${user.firstName} ${user.lastName} `}Log Out</span>  </a> : <Link to="/Login" className='navbar-item'><i className='fas fa-sign-in'></i> <span>Login</span></Link>
            }
            <button id="boton-session"><img /></button>
            <div className="menu-session">
                <div className="perfil">
                    <a><img /></a>
                    <a></a>
                </div>
                <ul className="session-opcion">
                    {
                    optionsRigth.map((option) => (
                        <li key={option.value}>
                            <Link to={option.value} className='navbar-item'> <i className={option.icon}></i> <span> { option.label} </span></Link>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}