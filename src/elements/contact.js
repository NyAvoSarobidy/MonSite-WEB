import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style/contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faMailBulk, faMessage } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1y8slf', 'template_id', form.current, {
        publicKey: '_Ic6ipYzjbMFR34Tu',
      })
      .then(
        () => {
          toast.success('Email envoyé avec succès 😊', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error(`Échec de l'envoi de l'email 😞 : ${error.text}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
      );
  }







    return( 
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Contact</h2>
         </div> 
          <div className="row gx-lg-0 gy-4">
            <div className="col-lg-4">
  
              <div className="info-container d-flex flex-column align-items-center justify-content-center">
                <div className="info-item d-flex">
                <i>  <FontAwesomeIcon className="bi bi-envelope flex-shrink-0"  icon={faAddressCard} /> </i> 
              
                  <div>
                    <h4>Adresse :</h4>
                    <p>Antananarivo Madagascar</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"><FontAwesomeIcon className="bi bi-envelope flex-shrink-0"  icon={faMailBulk} /></i>
                  <div>
                    <h4>Email:</h4>
                    <p>nyavoandriatsilavo@gmail.com</p>
                  </div>
                </div>
  
                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"><FontAwesomeIcon className="bi bi-envelope flex-shrink-0"  icon={faPhone} /></i>
                  <div>
                    <h4>Telephone:</h4>
                    <p style={{ fontSize :"12px"}}>+261 34 57 497 76 - +261 32 27 448 74</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-clock flex-shrink-0"><FontAwesomeIcon className="bi bi-envelope flex-shrink-0"  icon={faFacebook} /></i>
                  <div>
                    <h4>Facebook :</h4>
                    <p>Ny Avo Andriatsilavo</p>
                  </div>
                </div>
              </div>
  
            </div>
            <div className="col-lg-8">
            <form
              method="post"
              role="form"
              placeholder="Votre Nom"
              className="php-email-form"
              ref={form} onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                  
                    className="form-control"
                    placeholder="Votre Nom"
                    required
                    name="to_name" 
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                  type="email" name="from_name"
                    className="form-control"
                    placeholder="Votre Email"
                    required
                  
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                name="message"
                  rows="7"
                  placeholder="Votre Message"
                  required
              
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Envoyer</button>
              </div>
            </form>
            </div>
  
          </div>
        </div>
        <ToastContainer />
      </section>
      
      );
}
export default Contact;