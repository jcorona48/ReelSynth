import './menu-center.css';
import { Link } from "react-router-dom";
import { useState, useMemo } from 'react';

export default function ShowMenuCenter() {

    const options = useMemo( () => [
        { label: "Home", value: "", icon: "fas fa-duotone fa-house" },
        { label: "Movies", value: "movies", icon: "fas fa-film" },
        { label: "Series", value: "series", icon: "fas fa-tv" },
        { label: "Anime", value: "anime", icon: "fas fa-solid fa-wand-sparkles" },
        { 
            label: "Genrers", value: "genrers", icon: "fa-solid fa-album-collection",
            drop: [
                { label: "Action", value: "action", icon: "fa-solid fa-fire" },
                { label: "Adventure", value: "adventure", icon: "fa-solid fa-fire" },
                { label: "Comedy", value: "comedy", icon: "fa-solid fa-fire" },
                { label: "All Genrers", value: "All-Genrers", icon: "fa-solid fa-layer-plus" }, 
        ] },
        { 
            label: "Producer", value: "producers", icon: "fa-solid fa-circle-video",
            drop: [
                { label: "Marvel Studios", value: "Marvel Studios", icon: "fa-solid fa-fire" },
                { label: "Disney", value: "Disney", icon: "fa-solid fa-fire" },
                { label: "Netflix", value: "Netflix", icon: "fa-solid fa-fire" },
                { label: "All Producer", value: "All-Producer", icon: "fa-solid fa-layer-plus" },
        ]
        }
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