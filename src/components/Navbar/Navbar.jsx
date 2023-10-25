import './Navbar.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { UserContext } from '../../Context/userContext';
import { useContext } from 'react';
const options = [
    { label: "Home", value: "", icon: "fas fa-regular fa-house" },
    { label: "Movies", value: "movies", icon: "fas fa-film" },
    { label: "Series", value: "series", icon: "fas fa-tv" },
    { label: "About", value: "about", icon: "fas fa-address-card" },
    { label: "Contact", value: "contact", icon: "fas fa-address-book" },
];

/*

<Link to={option.value}>{ option.label}</Link>

*/
export default function Navbar() {
    const {user, setUser} = useContext(UserContext)
    const [input, setInput] = useState(false);
    const toggleInput = () => {
        setInput(!input);
    }
    
    return (
        
        <nav className="navbar">
            <Link to="/"><h1 className='logo'> <i className='fas fa-clapperboard'></i> <span>Video JJ</span></h1></Link>
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
                <button onClick={toggleInput}><i className={input ? 'fas fa-x' : 'fas fa-search'}></i></button>
                {
                    user ? <a className='logout' onClick={() =>{ setUser(null) }} ><i className='fas fa-right-to-bracket ' ></i> <span>Log Out</span>  </a> : <Link to="/Login" className='navbar-item'><i className='fas fa-right-to-bracket'></i> <span>Login</span></Link>
                }
            </div>
        </nav>

        
    )
}