import "./Footer.css"
import { Link } from "react-router-dom";

export default function FooterPage() {

    return(
        <div>
            <footer>
                <Link href="#titulo" className="flechaUp" src="./recursos/flecha-hacia-arriba.png"></Link>
                <p>&copy; {new Date().getFullYear() } Video JJ | Team Developer</p>
                <a href="mailto:jeyllomsandoval@gmail.com" className="soport">Contacto</a>
            </footer>
        </div>
    )
}

