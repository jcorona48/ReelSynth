import { useEffect, useState,useMemo } from "react";
import "./footer.css"
import { company } from "../../../config/defaultconfig";
import { Link } from "react-router-dom";

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

    const optionsFooter = useMemo( () => [
        { label: "About", value: "about", style: "soport"}
    ], []) ;
    
    return(
            <footer>
                <a onClick={(e) => {
                    e.preventDefault(); 
                    scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }}   
                className={scroll ? "FlechaUp" : 'FlechaUpOff' } 
                > 
                <div>
                    <i className="fas fa-arrow-up flechaUp">
                        
                    </i>
                </div>
                </a>
                <div className="footer-info">
                    <article className="footer-left">
                        <div className="footer-left-logo">
                            <img src={company.imgURL} alt={company.name} />
                            <h2>{company.name}</h2>
                        </div>
                        <p> {company.description} </p>
                    </article>
                    <article className="footer-center">
                        <p>&copy; {new Date().getFullYear() } {company.name} | Team Developer</p>
                        {
                        optionsFooter.map((option) => (
                            <li key={option.value}>
                            <Link to={option.value} className='navbar-item-footer'> <i></i> <span className={option.style}> { option.label} </span></Link>
                            </li>
                        ))
                        }
                        <a href="mailto:josewx324@gmail.com" className="soport">Contact</a>
                    </article>
                    <article className="footer-rigth">
                        <h2>Aids</h2>
                        <ul>
                            <li><a href="/" className="soport">Home</a></li>
                            <li><a href="https://github.com/JeyllonSandoval/Proyecto-Ing.Software.git" className="repost-git soport">Back-End</a><i className="fa-brands fa-github"></i></li>
                            <li><a href="https://github.com/jcorona48/ReelSynth" className="repost-git soport">Front-End</a><i className="fa-brands fa-github"></i></li>
                        </ul>
                    </article>
                </div>
            </footer>
    )
}

