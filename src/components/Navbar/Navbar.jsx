import './Navbar.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

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

    const [input, setInput] = useState(false);

    const toggleInput = () => {
        setInput(!input);
    }
    
    return (
        
        <nav className="navbar">
            <Link to="/"><h1 className='logo'> <i className='fas fa-clapperboard'></i>Video JJ</h1></Link>
            <ul>
                {
                options.map((option) => (

                    <li key={option.value}>
                        <Link to={option.value}> <i className={option.icon}></i> { option.label}</Link>
                    </li>
                ))
                }
            </ul>
            
            <div className='inputContainer'>
                <input type="search" placeholder="Search..." className='inputSearch' style={{display: input ? 'flex' : 'none'}}/>
                <button onClick={toggleInput}><i className={input ? 'fas fa-x' : 'fas fa-search'}></i></button>
            </div>
        </nav>

        
    )
}