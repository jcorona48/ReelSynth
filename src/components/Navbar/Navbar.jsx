import './Navbar.css'
import { Link } from "react-router-dom";
import { useMemo } from 'react';
import ShowMenuLeft from "./menu-left/menu-left"
import ShowMenuRigth from "./menu-rigth/menu-rigth"

/*

<Link to={option.value}>{ option.label}</Link>

*/
export default function Navbar() {
    // const [input, setInput] = useState(false);
    
    // const toggleInput = useCallback(() => {
    //     setInput((prevInput) => !prevInput);
    //     }, []);

    const options = useMemo( () => [
        { label: "Home", value: "", icon: "fas fa-duotone fa-house" },
        { label: "Movies", value: "movies", icon: "fas fa-film" },
        { label: "Series", value: "series", icon: "fas fa-tv" },
        { label: "Anime", value: "anime", icon: "fas fa-solid fa-wand-sparkles" },
        { label: "Genrers", value: "genrers", icon: "fa-solid fa-album-collection" },
        { label: "Producer", value: "producer", icon: "fa-solid fa-circle-video" }
    ]) ;

    return (
//         <nav className="navbar">
//                 <Link to="/"><h1 className='logo'> <i className='fas fa-camera-movie'></i> <span>Video JJ</span></h1></Link>
//                 <ul>
//                     {
//                     options.map((option) => (

//                         <li key={option.value}>
//                             <Link to={option.value} className='navbar-item'> <i className={option.icon}></i> <span> { option.label} </span></Link>
//                         </li>
//                     ))
//                     }
//                 </ul>
                
//                 <div className='inputContainer'>
//                     <input type="search" placeholder="Search..." className='inputSearch' style={{display: input ? 'flex' : 'none'}}/>
//                     <button onClick={toggleInput}><i className={input ? 'fas fa-times' : 'fas fa-search'}></i></button>
//                     {
//                         user ? <a className='logout' onClick={() =>{ deleteToken(); addAlert("Cerrado de Sesion", "error") }} ><i className='fas fa-sign-out ' ></i> <span >{`${user.firstName} ${user.lastName} `}Log Out</span>  </a> : <Link to="/Login" className='navbar-item'><i className='fas fa-sign-in'></i> <span>Login</span></Link>
//                     }
//                 </div>
//      </nav>
//
        <header className="container-navbar">
            <div className="container-left">
                <ShowMenuLeft />
                <div className="container-logo">
                    <i className='fas fa-camera-movie' /><a className="logo">VIDEO JJ</a>
                </div>
            </div>

            <div className="container-center">
                <ul className='menu'>
                    {
                    options.map((option) => (
                        <li key={option.value}>
                            <Link to={option.value} className='navbar-item'> <i className={option.icon}></i> <span> { option.label} </span></Link>
                        </li>
                        ))
                    }
                </ul>
            </div>

            <div className="container-rigth">
                <div className="lupa">
                    <input type="text" placeholder="Pelicula, serie o anime"/>
                    <i className="fas fa-solid fa-magnifying-glass" style={{color: "#000000",}} />
                </div>
                <ShowMenuRigth />
            </div>
        </header>
        
    )
}