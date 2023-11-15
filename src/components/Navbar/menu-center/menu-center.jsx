import './menu-center.css';
import { Link } from "react-router-dom";
import { useMemo } from 'react';

export default function ShowMenuCenter() {

    const options = useMemo( () => [
        { label: "Home", value: "", icon: "fas fa-duotone fa-house" },
        { label: "Movies", value: "movies", icon: "fas fa-film" },
        { label: "Series", value: "series", icon: "fas fa-tv" },
        { label: "Anime", value: "anime", icon: "fas fa-solid fa-wand-sparkles" },
        { label: "Genrers", value: "genrers", icon: "fa-solid fa-album-collection" },
        { label: "Producer", value: "producer", icon: "fa-solid fa-circle-video" }
    ]) ;

    return (
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
    )

}