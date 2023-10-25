import "./Footer.css"

export default function FooterPage() {

    return(
            <footer>
                <a onClick={(e) => {e.preventDefault(); scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}} > <i className="fas fa-arrow-up flechaUp"></i></a>
                <p>&copy; {new Date().getFullYear() } Video JJ | Team Developer</p>
                <a href="mailto:jeyllomsandoval@gmail.com" className="soport">Contacto</a>
            </footer>
    )
}

