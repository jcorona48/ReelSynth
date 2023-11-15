import './menu-left.css';
import { Link } from "react-router-dom";
import { useState, useMemo } from 'react';

export default function ShowMenuLeft(){

    const optionsLeft = useMemo( () => [
        { label: "Home", value: "", icon: "fas fa-duotone fa-house" },
        { label: "Movies", value: "movies", icon: "fas fa-film" },
        { label: "Series", value: "series", icon: "fas fa-tv" },
        { label: "Anime", value: "anime", icon: "fas fa-solid fa-wand-sparkles" },
        { label: "Genrers", value: "genrers", icon: "fa-solid fa-album-collection" },
        { label: "Producer", value: "producer", icon: "fa-solid fa-circle-video" },
        { label: "Top Movies", value: "producer", icon: "fa-solid fa-circle-video" },
        { label: "Top Series", value: "producer", icon: "fa-solid fa-circle-video" },
        { label: "Top Anime", value: "producer", icon: "fa-solid fa-circle-video" }
    ]) ;

    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="container-left">
            <div className="container-menu-left">
                <button id="boton-menu-left" onClick={toggleMenu}><i className='fas fa-solid fa-bars fa-2x' style={{color: "#ffff",}}/></button>
                {isVisible && (
                    <div className="menu-left">
                        <div className="container-lupa-left">
                            <div className="lupa-left">
                                <input type="text" placeholder="Pelicula, serie o anime" />
                                <i className=""></i>
                            </div>
                        </div>
                        <div className="container-left-option">
                            <ul className="left-option">
                                {
                                optionsLeft.map((option) => (
                                    <li key={option.value}>
                                        <Link to={option.value} className='navbar-item'> <i className={option.icon}></i> <span> { option.label} </span></Link>
                                    </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <span>Recuerda divertirte y compartir tu experiencia!</span>
                    </div>
                )}
            </div>
            <div className="container-logo">
                <i className='fas fa-camera-movie' /><a className="logo">VIDEO JJ</a>
            </div>
        </div>
    )
}