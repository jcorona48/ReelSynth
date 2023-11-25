import './menu-rigth.css'
import { Link } from "react-router-dom";
import { useState, useContext, useCallback, useMemo } from 'react';
import { UserContext } from '../../../Context/userContext';
import { AlertsContext } from '../../../Context/alertContext';
import { useNavigate } from 'react-router-dom';
export default function ShowMenuRigth(){
    
    const {user, deleteToken} = useContext(UserContext)
    const {addAlert} = useContext(AlertsContext)
    const navigate = useNavigate()
    const optionsRigth = useMemo( () => [
        { label: "Profile", value: "Profile", class:"option", icon: "fa-solid fa-user", onClick: () => { } },
        { label: "Follow", value: "Follow", class:"option", icon: "fa-duotone fa-bookmark", onClick: () => { }  },
        { label: "Sign Out", value: "", class:"out", icon: "fa-solid fa-right-from-bracket", onClick: () => {
            setIsMenuRigthOpen(false); 
            deleteToken(); 
            addAlert("Cerrado de Sesion", "error");  
            } }
    ] , [deleteToken, addAlert]   ) ; 

    const [isMenuRigthOpen, setIsMenuRigthOpen] = useState(false);

    const handleClick = () => {
        setIsMenuRigthOpen(!isMenuRigthOpen);
    };

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        const { search } = data;

        if(search){
            
            const url = search.replace(/ /g, '-');
            navigate(`/search/${url}`);
        }

    }, []);

    return(
        <div className="container-rigth">

            <form className="lupa" onSubmit={handleSubmit}>
                <input type="search" placeholder="Pelicula, serie o anime" name='search' className='inputSearch' autoComplete='off'/>
                <button type='submit'></button>
                <i className="fas fa-solid fa-magnifying-glass" style={{color: "#000000",}} />
            </form>

            <div className="container-session">
                {
                    user ? (
                        <button id="boton-session" onClick={handleClick}><img src={ user.imgURL || 'https://static.vecteezy.com/system/resources/previews/011/948/549/original/profile-does-not-exist-icon-customer-white-contour-marked-with-red-line-remote-avatar-erased-from-online-memory-graphic-line-design-social-media-communication-and-correspondence-character-vector.jpg'}/></button>
                        
                    )  : (
                        <Link to="/Login" className='Login-item'><i className="fa-duotone fa-circle-user"></i> <span>Login</span></Link>
                    )
                }
                {
                        isMenuRigthOpen && (
                    <div className="menu-session">
                        <div className="perfil">
                            <a><img src={ user.imgURL || 'https://static.vecteezy.com/system/resources/previews/011/948/549/original/profile-does-not-exist-icon-customer-white-contour-marked-with-red-line-remote-avatar-erased-from-online-memory-graphic-line-design-social-media-communication-and-correspondence-character-vector.jpg'}/></a>
                            <a>{user.firstName + ' ' + user.lastName}</a>
                        </div>
                        <ul className="session-opcion">
                            {
                            optionsRigth.map((option) => (
                                <li key={option.value}>
                                    <Link to={option.value} className={option.class} onClick={() => {
                                        setIsMenuRigthOpen(false)
                                        option.onClick()
                                        }}> <i className={option.icon}></i> <span> { option.label} </span></Link>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    )
                }
            </div>
        </div>
    );
}