import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import './FindMe.css';
const FindMe = () => {
  return (
    <section className='banner' id='contact'>
          <p className='section__subheader'>Redes Sociales</p>
      <h2 className='banner__header'>Sigueme en mis redes Sociales</h2>
      <div className='section__container banner__container'>
        <div className='banner__card'>
          <BsInstagram className='banner__image-icon'/>
          <p>Instagram</p>
        </div>
        <div className='banner__card'>
          <BsFacebook className='banner__image-icon'/>
          <p>Facebook</p>
        </div>
        <div className='banner__card'>
          <BsWhatsapp className='banner__image-icon'/>
          <p>Whatsapp</p>
        </div>
      </div>
    </section>
  )
}

export default FindMe