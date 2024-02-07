import React from 'react';
import images from '../../constants/images';
import {BsInstagram} from 'react-icons/bs';
import './Gallery.css';
const Gallery = () => {
  return (
    <section className='section__container photos__container' id='gallery'>
      <p className='section__subheader'>Galeria de Fotos</p>
      <h2 className='section__header'>Mira mis ultimos Post de Instagram</h2>
      <div className='photos__grid'>
        <div className='flex__center photos__card'>
          <img src={images.gallery01}/>
          <BsInstagram className='gallery__image-icon'/>
        </div>
        <div className='flex__center photos__card'>
          <img src={images.gallery02}/>
          <BsInstagram className='gallery__image-icon'/>
        </div>
        <div className='flex__center photos__card'>
          <img src={images.gallery03}/>
          <BsInstagram className='gallery__image-icon'/>
        </div>
        <div className='flex__center photos__card'>
          <img src={images.gallery04}/>
          <BsInstagram className='gallery__image-icon'/>
        </div>
        <div className='flex__center photos__card'>
          <img src={images.gallery04}/>
          <BsInstagram className='gallery__image-icon'/>
        </div>
        <div className='flex__center photos__card'>
          <img src={images.gallery04}/>
          <BsInstagram className='gallery__image-icon'/>
        </div>
      </div>
    </section>
  )
}

export default Gallery