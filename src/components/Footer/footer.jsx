import { useEffect, useState } from "react";
import "./Footer.css"

export default function FooterPage() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        onscroll = () => {
            if(window.scrollY > 80){
                setScroll(true)
            }
            else{
                setScroll(false)
            }
            
        }
    }, [])
    
    return(
            <footer>
                <a onClick={(e) => {e.preventDefault(); scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}}   className={scroll ? "FlechaUp" : '' } > <i className="fas fa-arrow-up flechaUp"></i></a>
                <p>&copy; {new Date().getFullYear() } Video JJ | Team Developer</p>
                <a href="mailto:jeyllomsandoval@gmail.com" className="soport">Contacto</a>
            </footer>
    )
}

