import React from 'react';
import './contact.css';
import ContactSvg from './contact.svg'
import Tiktok from './tik-tok-2.png'
import Gmail from './gmail.png'

function Contact() {
  return (
    <div className='contact-container'>
      <img src={ContactSvg} alt=""/>
      <div className="contact-icons">
        <a href="https://www.tiktok.com/@yejidelovesrealestate/">
          <img className='tiktok' src={Tiktok} alt="" />
        </a>
        <a href="mailto:yejide.bunche@exprealty.com">
          <img className='gmail' src={Gmail} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
