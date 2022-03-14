import React from "react";
import './header.css';
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/img/perfil.png'

const Header = () => {
    return (
        <header>
        <div className="container header__container ">
            <h5>{process.env.REACT_APP_TITLE}</h5>
            <h1>{process.env.REACT_APP_MY_NAME}</h1>
            <h5 className="text-light">{process.env.REACT_APP_DEVELOPER_TYPE}</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
            <img src={ME} alt="" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
        </header>
    )
}

export default Header
