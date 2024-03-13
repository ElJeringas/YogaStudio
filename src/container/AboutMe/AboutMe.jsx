import React from 'react';
import images from '../../constants/images';
import './AboutMe.css';
const AboutMe = () => {
  return (
    <section className='about' id='about'>
      <div className='section__container about__container'>
        <div className='about__image'>
          <img src={images.about} alt='about me'/>
        </div>
        <div className='about__content'>
          <h2 className="about__header">🌿 ¿Quién soy yo?: <br/><strong>Yoga Transformador</strong></h2>
          <p>
          {/* <strong>¿Quién soy yo? </strong>🧘🏻‍♀️<br/><br/> */}
          En mis múltiples intentos por definirme he llegado a la conclusión de que cualquier adjetivo que me ponga encima me limita de la posibilidad de cambiar y por ende de la posibilidad de expandirme ✨🫀<br/> <br/> Pero ahora necesito presentarme así que aquí voy… intentando no cortarme las alas que me he estado dejando crecer por algunos años 🌱<br/><br/> ¿Quién soy? Mi nombre es Gabriela, soy psicóloga y aspirante espiritual. Actualmente me encuentro transitando y experimentando la vida a través de la filosofía del yoga 🧘🏻‍♀  Desde el amor comparto esta poderosa herramienta para que podamos recorrer juntos el hermoso camino de la sanación (unión). Una invitación a llevar una vida plena, consciente y armoniosa; reconociendo el amor como único medio para lograrlo ♥
          </p>
          <p>
          <strong>Mi Estilo:</strong> ☀️<br/><br/>
          El yoga transformó mi vida y puede transformar la tuya también. Mis clases son basadas en la tradición de Hatha Yoga Sivananda, conocimiento que adquirí tras un año de vivir en Sivananda ashram, Colombia.
          </p>
          <p><strong>ॐ Om</strong></p>

          <div className='about__content-sign'>
            <img src={images.signature} alt='sign'/>
            <p>Profesora de yoga - Psicóloga</p>
         </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe