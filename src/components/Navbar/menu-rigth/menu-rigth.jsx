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
        { label: "Profile", value: "", class:"option", icon: "" },
        { label: "Follow", value: "", class:"option", icon: "" },
        { label: "Sign Out", value: "", class:"out", icon: "" }
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
                <button id="boton-session" onClick={handleClick}><img src='https://static.vecteezy.com/system/resources/previews/011/948/549/original/profile-does-not-exist-icon-customer-white-contour-marked-with-red-line-remote-avatar-erased-from-online-memory-graphic-line-design-social-media-communication-and-correspondence-character-vector.jpg'/></button>
                {isMenuRigthOpen && (
                <div className="menu-session">
                    <div className="perfil">
                        <a><img src='https://static.vecteezy.com/system/resources/previews/011/948/549/original/profile-does-not-exist-icon-customer-white-contour-marked-with-red-line-remote-avatar-erased-from-online-memory-graphic-line-design-social-media-communication-and-correspondence-character-vector.jpg'/></a>
                        <a>Username</a>
                    </div>
                    <ul className="session-opcion">
                        {
                        optionsRigth.map((option) => (
                            <li key={option.value}>
                                <Link to={option.value} className={option.class}> <i className={option.icon}></i> <span> { option.label} </span></Link>
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