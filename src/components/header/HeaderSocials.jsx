import React from "react";
import {AiFillInstagram} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
                <a href="https://instagram.com" target="_blank"><AiFillInstagram/></a>
                <a href="https://discord.com" target="_blank"><BsDiscord/></a>
                <a href="https://github.com" target="_blank"><FaGithub/></a>
        </div>
    )
}

export default HeaderSocials
