import React from "react"
import './style/styleFooter.css'
function Footer(){
    const styles = {
        profileImage: {
          width: "80px",
          height: "100px",
          objectFit: "cover",
          borderRadius : "8px",
        },
    };
    return(
        <>
        <footer id="footer" className="footer">
        <div className=" footer-contact text-center">
                    <h2 style={{ fontSize :"15px", paddingTop :"10px"}}>
                    ANDRIATSILAVO Ny Avo Sarobidy vous remercie de votre visite. Je suis disponible pour une collaboration, qu'elle soit  de courte 
                    ou de longue durée.<br/><br/><strong>Je vous souhaite le meilleur.</strong>
                    </h2>
                    <p class="mb-3 text-muted">&copy; Copyright .</p>
            </div>
        </footer>
        </>
    );
}
export default Footer;