import React from "react";
import '../styles/Footer.scss';



const Footer =()=>{
    return(
        <footer>
        <div>
            <h2>ROSO</h2>
            <p>@ all rights reserved</p>
        </div>
        <div className="links">
            <h5>Follow us</h5>
            <a href="/">Youtube</a>
            <a href="/">LinkedIn</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
        </div>
        </footer>
    )
}
export default Footer;