import './menu-center.css';
import { Link } from "react-router-dom";
import { useState, useMemo } from 'react';

export default function ShowMenuCenter() {

    const options = useMemo( () => [
        { label: "Home", value: "", icon: "fas fa-duotone fa-house" },
        { label: "Movies", value: "movies", icon: "fas fa-film",
        drop: [
            { label: "Top Movies", value: "top-movies", icon: "fa-solid fa-fire" } 
        ]},
        { label: "Series", value: "series", icon: "fas fa-tv",
        drop: [
            { label: "Top Series", value: "top-series", icon: "fa-solid fa-fire" } 
        ] },
        { label: "Animes", value: "animes", icon: "fas fa-solid fa-wand-sparkles" },
        { label: "Genres", value: "genrers", icon: "fa-solid fa-album-collection"},
        { label: "Producer", value: "producers", icon: "fa-solid fa-circle-video"}
    ]) ;

    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className="container-center">
            <ul className="menu">
            {options.map((option, index) => (
                <li key={option.value} onMouseEnter={() => handleDropdownToggle(index)} onMouseLeave={() => handleDropdownToggle(index)}>
                    <Link to={option.value} className="navbar-item"><i className={option.icon}></i> <span> {option.label} </span></Link>
                    {option.drop && openDropdown === index && (
                    <ul className="dropdown">
                        {option.drop.map((dropdownOption) => (
                        <li key={dropdownOption.value}>
                            <Link to={dropdownOption.value}>
                            <i className={dropdownOption.icon}></i> <span> {dropdownOption.label} </span>
                            </Link>
                        </li>
                        ))}
                    </ul>
                    )}
                </li>
            ))}
            </ul>
        </div>
    );
}