

import React from "react";
import './style/Travail.css'
// import './style/styleBody.css'
import Start from "./Start";
import Dgi from "./Dgi";
import Gesco from "./Gesco";
import PortFolio from "./PortFolio"
function Travail(){

return(
        <section id="recent-posts" className="recent-posts sections-bg ">
            <div className="container" data-aos="fade-up">
            <div className="section-header">
                <h2>Réalisation</h2>
            </div>
            <div className="row gy-4">
  <div className="col-12">
    <div className="row" style={{ borderRadius: "15px" }}>
      {/* Card 1 */}
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div
          className="card shadow-lg text-center p-4 h-100 d-flex flex-column justify-content-between"
          style={{
            borderRadius: "15px",
            backgroundColor: "#f8f9fa",
            minHeight: "350px",
          }}
        >
          <h5 className="card-title fw-bold" style={{ color : "#811010"}}>Digitalisation du calcul</h5>
          <p className="card-text">
            Calcul du prix de revient sur les produits importés et diffusion du calcul du prix de revient.
          </p>
          <div>
         
            <Start />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div
          className="card shadow-lg text-center p-4 h-100 d-flex flex-column justify-content-between"
          style={{
            borderRadius: "15px",
            backgroundColor: "#f8f9fa",
            minHeight: "350px",
          }}
        >
          <h5 className="card-title fw-bold" style={{ color : "#811010"}}>Suivi des tâches</h5>
          <p className="card-text">
            Application WEB pour un suivi efficace des tâches.
          </p>
          <div>
           
            <Dgi />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div
          className="card shadow-lg text-center p-4 h-100 d-flex flex-column justify-content-between"
          style={{
            borderRadius: "15px",
            backgroundColor: "#f8f9fa",
            minHeight: "350px",
          }}
        >
          <h5 className="card-title fw-bold" style={{ color : "#811010"}}>Ge-Sco</h5>

          <p className="card-text">
            Une application web mobile nommée "Ge-Sco" pour la gestion de scolarité.
          </p>
          <div>
          
            <Gesco />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div
          className="card shadow-lg text-center p-4 h-100 d-flex flex-column justify-content-between"
          style={{
            borderRadius: "15px",
            backgroundColor: "#f8f9fa",
            minHeight: "350px",
          }}
        >
          <h5 className="card-title fw-bold" style={{ color : "#811010"}} >Portfolio</h5>
          <p className="card-text">
            Mon site WEB personnel et portfolio.
          </p>
          <div>
           
            <PortFolio />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



            </div>
       </section>
    );
}

export default Travail;