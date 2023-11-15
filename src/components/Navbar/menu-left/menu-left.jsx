import './menu-left.css';
import { Link } from "react-router-dom";
import { useState, useCallback, useMemo } from 'react';

export default function ShowMenuLeft(){
    const [setInput] = useState(false);

    const toggleInput = useCallback(() => {
        setInput((prevInput) => !prevInput);
        }, []);
    
    const optionsLeft = useMemo( () => [
        { label: "Home", value: "", icon: "fas fa-duotone fa-house" },
        { label: "Movies", value: "movies", icon: "fas fa-film" },
        { label: "Series", value: "series", icon: "fas fa-tv" },
        { label: "Anime", value: "anime", icon: "fas fa-solid fa-wand-sparkles" },
        { label: "Genrers", value: "genrers", icon: "fa-solid fa-album-collection" },
        { label: "Producer", value: "producer", icon: "fa-solid fa-circle-video" },
        { label: "Top Movies", value: "producer", icon: "fa-solid fa-fire" },
        { label: "Top Series", value: "producer", icon: "fa-solid fa-fire" },
        { label: "Top Anime", value: "producer", icon: "fa-solid fa-fire" }
    ]) ;

    const [isMenuLeftOpen, setIsMenuLeftOpen] = useState(false);

    const handleClick = () => {
        setIsMenuLeftOpen(!isMenuLeftOpen);
    };

    return (
        <div className="container-left">
            <div className="container-menu-left">
                <button id="boton-menu-left" onClick={handleClick}><i className='fas fa-solid fa-bars fa-2x' style={{color: "#ffff",}}/></button>
                {isMenuLeftOpen && (
                <div className="menu-left">
                    <div className="container-lupa-left">
                        <div className="lupa-left">
                            <input type="search" placeholder="Pelicula, serie o anime" className='inputSearch'/>
                            <button onClick={toggleInput}></button>
                            <i className="fas fa-solid fa-magnifying-glass" style={{color: "#000000",}} />
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
                    <span className='message-dev'>Recuerda divertirte y compartir tu experiencia!</span>
                </div>
                )}
            </div>
            <div className="container-logo">
                <i className='fas fa-camera-movie' /><a className="logo">VIDEO JJ</a>
            </div>
        </div>
    )
}