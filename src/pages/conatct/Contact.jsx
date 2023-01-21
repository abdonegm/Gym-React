import React from 'react';
import "./contact.css";
import Header from '../../component/Header';
import contactimage from "../../images/header_bg_2.jpg";
import {MdEmail} from "react-icons/md";
import {FaFacebookMessenger} from "react-icons/fa";
import {AiOutlineWhatsApp} from "react-icons/ai";


function Contact() {
  return (
    <>
    <Header image={contactimage} title="Get In touch">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aut illo, at laboriosam velit et ut eum totam? Optio esse quae quos nobis repellat dolor! Rem commodi amet dolor obcaecati.

    </Header>
    <section className='contact'>
      <div className='container contact-container'>
        <div className='contact-wrapper'>
          <a href="mailto:abdonegm321@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
          <a href="http://m.me/" target="_blank" rel="noreferrer noopener"><FaFacebookMessenger /></a>
          <a href="https://wa.me/+201283016124" target="_blank" rel="noreferrer noopener"><AiOutlineWhatsApp /></a>

        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
