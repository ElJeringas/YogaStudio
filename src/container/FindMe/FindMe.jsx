import React from 'react'
import { BsLinkedin, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import './FindMe.css';
const FindMe = () => {
  return (
    <section className='banner' id='contact'>
          <p className='section__subheader'>Redes Sociales</p>
      <h2 className='banner__header'>Sigueme en mis redes Sociales</h2>
      <div className='section__container banner__container'>
        <div className='banner__card'>
        <a href="https://instagram.com/gabriella.astudillo?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <BsInstagram className='banner__image-icon'/>
          </a>
          <p>Instagram</p>
        </div>
        <div className='banner__card'>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className='banner__image-icon'/>
          </a>
          <p>LinkedIn</p>
        </div>
        <div className='banner__card'>
          <a href="https://api.whatsapp.com/send/?phone=593996819305&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp className='banner__image-icon'/>
          </a>
          <p>Whatsapp</p>
        </div>
      </div>
    </section>
  )
}

export default FindMe