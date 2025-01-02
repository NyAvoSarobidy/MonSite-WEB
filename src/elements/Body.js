
import React from "react";
import Typical from "react-typical";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDownLong} from "@fortawesome/free-solid-svg-icons"
import './style/styleBody.css'
import Skills from "../Composants/skills";
function Body(){
     const styles = {
         profileImage: {
           width: "400px",
           height: "300px",
           objectFit: "cover",
           borderRadius: "15px",
           boxShadow : "0px 8px 20px rgba(0, 0, 0, 0.5)",
         },
    
     };
      
return( 

    <>
    
      <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                <h2>
                    <span style={{ paddingTop : "5px",   color : "#11223"}}>
                        
                    <Typical
                    steps={[
                      'Bonjour 👋',
                      1000, 
                      'Bienvenue sur mon site web 🌐',
                      1500, 
                      "Je suis un Développeur Full Stack 💻",
                      1500, 
                      "Créateur de Sites Web",
                      1500, 
                      'Merci de visiter 😊', 
                      2000
                    ]}
                    loop={Infinity}
                    wrapper="span"
                    className="my-custom-class"
                  />

                              </span></h2>
                <p>
                Je m'appelle ANDRIATSILAVO Ny Avo Sarobidy. <br /> J'ai plus de 2 ans
                d'expérience dans le développement web.</p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                
                  <a  className="btn-get-started"        
                  onClick={() => window.open('/CV_ANDRIATSILAVO.pdf', '_blank')}
                  ><FontAwesomeIcon  className="ms-2 text-white" icon={faDownLong} /> Télécharger le CV</a>
              </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <div id="myCarousel" className=" carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        {/* <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
                    </div>
                    <div className="carousel-inner">
                        {/* <div className="carousel-item active">
                            <div className="container">
                                <div className="carousel-caption mx-auto">
                                <img
                                      className="img-thumbnail "
                                      src="/Profils.jpg"
                                      alt="Profile"
                                      style={styles.profileImage}
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="carousel-caption">
                                <img
                                      className="img-thumbnail "
                                      src="/image1.jpg"
                                      alt="Profile"
                                      style={styles.profileImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="carousel-caption text-white">
                                <img
                                      className="img-thumbnail "
                                      src="/image4.jpg"
                                      alt="Profile"
                                      style={styles.profileImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="carousel-caption text-center">
                                <img
                                      className="img-thumbnail "
                                      src="/image3.jpg"
                                      alt="Profile"
                                      style={styles.profileImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev  " type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon text-secondary" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        <div id="Profils" className="icon-boxes position-relative mt-5">
          <div className="container position-relative">
          <div className="card border-white img-zoom card-animation"  style={{ backgroundColor :"#0f1724"}}>
                  <div className="card-header text-white ">
                  <h4 className="text-white">Profil</h4>
                  </div>
                  <div className="card-body text-white">
                        <p style={{ fontSize : "18px ",}}>
                        Développeur full-stack passionné et expérimenté, je suis à la recherche d’une opportunité pour mettre en pratique mes connaissances, concevoir et mettre en œuvre des solutions technologiques innovantes. 
                        < br/>  Animé par la volonté de contribuer au succès de projets stimulants, j’apporte une approche polyvalente et une compréhension approfondie des technologies modernes, tout en continuant à élargir mes compétences techniques et à relever de nouveaux défis.
                  </p>
                  </div>
                  </div>
          </div>
        </div>
      </section>
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-header mt-3">
            <h2 >Compétence</h2>
         </div>
      
              <Skills />         
        </div>
      </section>
    </>  
);

}
export default Body;