import './Navbar.css'
import { Link } from "react-router-dom";
import { useState, useContext, useMemo, useCallback } from 'react';
import { UserContext } from '../../Context/userContext';
import { AlertsContext } from '../../Context/alertContext';

/*

<Link to={option.value}>{ option.label}</Link>

*/
export default function Navbar() {
    const {user, deleteToken} = useContext(UserContext)
    const {addAlert} = useContext(AlertsContext)
    const [input, setInput] = useState(false);
    
    const toggleInput = useCallback(() => {
        setInput((prevInput) => !prevInput);
      }, []);

    const options = useMemo( () => [
        { label: "Home", value: "", icon: "fas fa-home" },
        { label: "Movies", value: "movies", icon: "fas fa-film" },
        { label: "Series", value: "series", icon: "fas fa-tv" },
        { label: "About", value: "about", icon: "fas fa-address-card" },
        { label: "Contact", value: "contact", icon: "fas fa-address-book" },
    ]) ;
    return (
        
        <nav className="navbar">
            <Link to="/"><h1 className='logo'> <i className='fas fa-camera-movie'></i> <span>Video JJ</span></h1></Link>
            <ul>
                {
                options.map((option) => (

                    <li key={option.value}>
                        <Link to={option.value} className='navbar-item'> <i className={option.icon}></i> <span> { option.label} </span></Link>
                    </li>
                ))
                }
            </ul>
            
            <div className='inputContainer'>
                <input type="search" placeholder="Search..." className='inputSearch' style={{display: input ? 'flex' : 'none'}}/>
                <button onClick={toggleInput}><i className={input ? 'fas fa-times' : 'fas fa-search'}></i></button>
                {
                    user ? <a className='logout' onClick={() =>{ deleteToken(); addAlert("Cerrado de Sesion", "error") }} ><i className='fas fa-sign-out ' ></i> <span >{`${user.firstName} ${user.lastName} `}Log Out</span>  </a> : <Link to="/Login" className='navbar-item'><i className='fas fa-sign-in'></i> <span>Login</span></Link>
                }
            </div>
        </nav>

        
    )
}