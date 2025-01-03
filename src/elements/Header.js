
import React from "react";
import './style/styleHeader.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faHome } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Travail from "./Travail.js";
import Contact from "./contact.js";
import Body from "./Body.js";
// import ContactUs from "./Test.js"

function Header(){


return(
        <>
                <section id="topbar" className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <FontAwesomeIcon className="ms-2 text-white" icon={faEnvelope} /><a className="ms-2 text-white" href="mailto:nyavoandriatsilavo@gmail.com">
                    
                        nyavoandriatsilavo@gmail.com</a>
                        
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                    
                        <a href="https://www.facebook.com/profile.php?id=100075845820165"
                         target="_blank"
  rel="noopener noreferrer"
                        className="facebook"><FontAwesomeIcon  className="ms-2 text-white" icon={faFacebook} /></a>
                        <a href="https://github.com/NyAvoSarobidy"
                         
                         target="_blank"
                        rel="noopener noreferrer"
                        className="GitHub"><FontAwesomeIcon  className="ms-2 text-white" icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/nyavosarobidy"
                    target="_blank"
  rel="noopener noreferrer"
                        className="linkedin"><FontAwesomeIcon  className="ms-2 text-white" icon={faLinkedin} /></a>
                    </div>
                </div>
                </section>
                <header id="header" className="header d-flex align-items-center">

                    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        
                        <h1>NyAvoSAROBIDY<span>.</span></h1>
                    </a>
                    <nav id="navbarNav" className="navbar navbar-expand-md">
                        <ul>
                        <li className="nav-item">
                            <a className="nav-link "   href="#Accueil">
                            <span><FontAwesomeIcon  className="me-2 text-white" icon={faHome} /></span> 
                        Accueil
                            </a></li>
                    
                        
                        {/* <li  className="nav-item">
                            <a className="nav-link " href="#Profils">
                            <span><FontAwesomeIcon  className="me-2 text-white" icon={faPerson} /></span> 
                        
                            Profils</a></li> */}
                        </ul>
                    </nav>


                    </div>
                </header>
                <section id="Accueil" className="hero">
                <Body />
                </section>
                <Travail/>
                <Contact/> 
                {/* <ContactUs/> */}
        </>
    );

}
export default Header;