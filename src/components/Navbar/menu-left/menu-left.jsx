import './menu-left.css';
import { Link } from "react-router-dom";
import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { company } from '../../../../config/defaultconfig';

export default function ShowMenuLeft(){
    const [setInput] = useState(false);
    const navigate = useNavigate();
    const toggleInput = useCallback(() => {
        setInput((prevInput) => !prevInput);
        }, []);
    
    const optionsLeft = useMemo( () => [
        { label: "Home", value: "", icon: "fas fa-duotone fa-house" },
        { label: "Movies", value: "movies", icon: "fas fa-film" },
        { label: "Series", value: "series", icon: "fas fa-tv" },
        { label: "Anime", value: "anime", icon: "fas fa-solid fa-wand-sparkles" },
        { label: "Genrers", value: "genrers", icon: "fa-solid fa-album-collection" },
        { label: "Producer", value: "producers", icon: "fa-solid fa-circle-video" },
        { label: "Top Movies", value: "producer", icon: "fa-solid fa-fire" },
        { label: "Top Series", value: "producer", icon: "fa-solid fa-fire" },
        { label: "Top Anime", value: "producer", icon: "fa-solid fa-fire" }
    ]) ;

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        const { search } = data;

        if(search){
            
            setIsMenuLeftOpen(false)
            const url = search.replace(/ /g, '-');
            navigate(`/search/${url}`);
        }

    }, []);

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
                        <form className="lupa-left" onSubmit={handleSubmit}>
                            <input type="search" placeholder="Pelicula, serie o anime" className='inputSearch' name='search'/>
                            <button onClick={toggleInput}></button>
                            <i className="fas fa-solid fa-magnifying-glass" style={{color: "#000000",}} />
                        </form>
                    </div>
                    <div className="container-left-option">
                    <ul className="left-option">
                        {
                        optionsLeft.map((option) => (
                            <li key={option.value} onClick={() => { setIsMenuLeftOpen(false)}} >
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
            <Link to="/" className="container-logo">
                <img src={company.imgURL} alt={company.name} className="company-logo"/>
                <h1 className='company-name'>{company.name}</h1>
            </Link>
        </div>
    )
}