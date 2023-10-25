import "./Footer.css"
import { Link } from "react-router-dom";

export default function FooterPage() {

    return(
            <footer>
                <Link href="#titulo"> <i className="fas fa-arrow-up flechaUp"></i></Link>
                <p>&copy; {new Date().getFullYear() } Video JJ | Team Developer</p>
                <a href="mailto:jeyllomsandoval@gmail.com" className="soport">Contacto</a>
            </footer>
    )
}

