import './menu-rigth.css'
import { Link } from "react-router-dom";
import { useState, useContext, useCallback, useMemo } from 'react';
import { UserContext } from '../../../Context/userContext';
import { AlertsContext } from '../../../Context/alertContext';

export default function ShowMenuRigth(){
    const [setInput] = useState(false);
    
    const toggleInput = useCallback(() => {
        setInput((prevInput) => !prevInput);
        }, []);

    const {user, deleteToken} = useContext(UserContext)
    const {addAlert} = useContext(AlertsContext)

    const optionsRigth = useMemo( () => [
        { label: "Profile", value: "", icon: "" },
        { label: "Follow", value: "", icon: "" },
        { label: "Sign Out", value: "", icon: "" }
    ]) ;

    const [isMenuRigthOpen, setIsMenuRigthOpen] = useState(false);

    const handleClick = () => {
        setIsMenuRigthOpen(!isMenuRigthOpen);
    };

    return(
        <div className="container-rigth">
            <div className="lupa">
                <input type="search" placeholder="Pelicula, serie o anime" className='inputSearch'/>
                <button onClick={toggleInput}></button>
                <i className="fas fa-solid fa-magnifying-glass" style={{color: "#000000",}} />
            </div>
            <div className="container-session">
                {
                    user ? <a className='logout' onClick={() =>{ deleteToken(); addAlert("Cerrado de Sesion", "error") }} ><i className='fas fa-sign-out ' ></i> <span >{`${user.firstName} ${user.lastName} `}Log Out</span>  </a> : <Link to="/Login" className='navbar-item'><i className='fas fa-sign-in'></i> <span>Login</span></Link>
                }
                <button id="boton-session" onClick={handleClick}><img /></button>
                {isMenuRigthOpen && (
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
                )}
            </div>
        </div>
    );
}