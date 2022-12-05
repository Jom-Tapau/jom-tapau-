import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,faSnapchat ,faTwitter} from "@fortawesome/free-brands-svg-icons"
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div class="footer-basic">
          <footer>
            <div class="social">
              <a href="https://www.facebook.com/Jomtapau.official?mibextid=LQQJ4d">
                <i class="ion-social-facebook">  
                <FontAwesomeIcon className="fs-1" icon={faFacebook} /></i>
              </a>
              <a href="https://www.instagram.com/jomtapau.official/">
                <i class="icon ion-social-instagram"> <FontAwesomeIcon className="fs-1" icon={faInstagram} /> </i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter">   </i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"> </i>
              </a>
            </div>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="/home">Home</a>
              </li>
              <li class="list-inline-item">
                <a href="/menu">Menu</a>
              </li>
              <li class="list-inline-item">
                <a href="/about">About</a>
      
            
         
             
          
 
            
 
 

             
              </li>
              <li class="list-inline-item">
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <p class="copyright">Jom Tapau © 2022</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
