import './Navbar.css'
import ShowMenuLeft from "./menu-left/menu-left"
import ShowMenuRigth from "./menu-rigth/menu-rigth"
import ShowMenuCenter from './menu-center/menu-center';

/*

<Link to={option.value}>{ option.label}</Link>

*/
export default function Navbar() {

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
            <ShowMenuLeft />

            <ShowMenuCenter />

            <ShowMenuRigth />
        </header>
        
    )
}