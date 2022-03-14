import React from "react";
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>{process.env.REACT_APP_MY_NAME}</a>

            <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>

           <div className="footer__socials">
             <a href={process.env.REACT_APP_MY_FACEBOOK_LINK}><FaFacebookF /></a>
             <a href={process.env.REACT_APP_MY_INSTAGRAM_LINK}><FiInstagram /></a>
             <a href={process.env.REACT_APP_MY_TWITTER_LINK}><IoLogoTwitter /></a>
           </div>

           <div className="footer__copyright">
             <small>&copy; {process.env.REACT_APP_MY_NAME} All rights reserved.</small>
           </div>

        </footer>
    )
}

export default Footer
