import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,faTelegram, faTiktok} from "@fortawesome/free-brands-svg-icons"
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer-basic">
          <footer>
            <div className="social">
              <a href="https://www.facebook.com/Jomtapau.official?mibextid=LQQJ4d"target="_blank" >
                <i className="ion-social-facebook">  
                <FontAwesomeIcon className="fs-3" icon={faFacebook} /></i>
              </a>
              <a href="https://www.instagram.com/jomtapau.official/"target="_blank">
                <i className="icon ion-social-instagram"> <FontAwesomeIcon className="fs-3" icon={faInstagram} /> </i>
              </a>
              <a href="https://www.instagram.com/jomtapau.official/"target="_blank">
                <i className="icon ion-social-Telegram"> <FontAwesomeIcon className="fs-3" icon={faTelegram} />  </i>
              </a>
              <a href="https://www.tiktok.com/@jomtapau.official"target="_blank">
                <i className="icon ion-social-Telegram"> <FontAwesomeIcon className="fs-3" icon={faTiktok} />  </i>
              </a>
            </div>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/home">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="/menu">Menu</a>
              </li>
              <li className="list-inline-item">
                <a href="/about">About</a>
      
              </li>
              <li className="list-inline-item">
                <a href="/about">Contact Us</a>
              </li>
            </ul>
            <p className="copyright">Jom Tapau © 2022</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
