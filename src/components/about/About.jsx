import React from "react";
import './about.css';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/img/about.jpg'

const About = () => {
return (
<section id='about'>
   <h5>Get To Know</h5>
   <h2>About Me</h2>

   <div className="container about__container">
      <div className="about__me">
            <div className="about__me-image">
               <img src={ME} alt="About Image" />
            </div>
      </div>
      <div className="about__content">
         <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about__icon' />
                <h5> Experience </h5>
                <small>3+ Years Working</small>
            </article>
           <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5> Clients </h5>
                <small>300+ Worldwide</small>
           </article>
           <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5> Projects </h5>
                <small>80+ Completed</small>
          </article>
         </div>

         <p>
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
         </p>

         <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>
   </div>
</section>
)
}
export default About
