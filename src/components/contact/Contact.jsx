import React from "react";
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiDiscordLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')

    e.target.reset()
  };

    return (
        <section id='contact'>
           <h5>Get In Touch</h5>
           <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>{process.env.REACT_APP_MY_EMAIL}</h5>
                        <a href="mailto:{process.env.REACT_APP_MY_EMAIL}" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>{process.env.REACT_APP_MY_FACEBOOK_NAME}</h5>
                        <a href="https://m.me/{process.env.REACT_APP_MY_FACEBOOK_NAME}" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiDiscordLine className='contact__option-icon' />
                        <h4>Discord</h4>
                        <h5>{process.env.REACT_APP_MY_DISCORD_NAME}</h5>
                        <a href="https://discord.com/users/{process.env.REACT_APP_MY_DISCORD_ID}" target="_blank">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
