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
          <h2 className="about__header">🌿 Sobre Mí: <br/><strong>Yoga Transformador</strong></h2>
          <p>
          ¡Hola! Soy Gaby, una apasionada instructora de yoga dedicada a guiar a las personas en su viaje hacia el bienestar a través de la práctica transformadora del yoga.<br/></p>
          <p>
          <strong>Mi Viaje: </strong>🧘🏻‍♀️<br/><br/>
          Mi amor por el yoga comenzó como una exploración personal de autodescubrimiento y equilibrio. En medio del ajetreo de la vida, el yoga se convirtió en mi santuario: un espacio para respirar, moverme y reconectar con mi ser interior. A lo largo de los años de práctica, he encontrado no solo fuerza física sino también una profunda sensación de paz y atención plena.
          </p>
          <p>
          <strong>Mi Estilo:</strong> ☀️<br/><br/>
          Con experiencia en <strong>Medellin, Colombia</strong>, mis clases combinan elementos de Vinyasa, Hatha o Yin para crear una experiencia holística y accesible. A través del movimiento consciente, la respiración y la meditación, trabajamos juntas para cultivar fuerza, flexibilidad y una sensación de calma.
          </p>
          <p>
          <strong>Únete a este viaje:</strong> 🌎<br/><br/>
           Ya sea que busques un flujo desafiante, un momento de quietud o simplemente un respiro de las demandas de la vida cotidiana, te invito a unirte a mí en la esterilla. Embárcate en este viaje transformador juntas, abrazando el poder del yoga para traer equilibrio, alegría y vitalidad a nuestras vidas.
           <br/><br/> <strong>ॐ Namaste</strong>,
          </p>

          <div className='about__content-sign'>
            <img src={images.signature} alt='sign'/>
            <p >Profesora de yoga - Psicologa</p>
         </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe