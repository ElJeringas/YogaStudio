import React from 'react'
import images from '../../constants/images';
import './Hero.css';
const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='section__container hero__container'>
      <div className='hero__card'>
          <span><img src={images.icon03} alt='hero'/></span>
          <h4>Psicología Védica</h4>
          <p>
          La psicología védica es una disciplina que se basa en las antiguas enseñanzas de la India conocidas como los Vedas. Se centra en comprender la mente humana, las emociones y el comportamiento a través de la lente de la filosofía védica y las prácticas espirituales.
          </p>
        </div>

        <div className='hero__card'>
          <span><img src={images.icon02} alt='hero'/></span>
          <h4>Equilibrio cuerpo, mente y espíritu</h4>
          <p>
          Te acompaño a recordar que la salud eres tú a través de la unión sagrada del cuerpo, la mente y el espíritu.
          </p>
        </div>
        <div className='hero__card'>
          <span><img src={images.icon01} alt='hero'/></span>
          <h4>Estilo de vida saludable</h4>
          <p>
          Abraza un estilo de vida saludable a través del poder transformador del yoga y cultiva la vitalidad física y la paz interior.
          </p>
        </div>
{/*         <div className='hero__card'>
          <span><img src={images.icon04} alt='hero'/></span>
          <h4>Cuidado personal</h4>
          <p>
          Descubre el poder transformador del autocuidado a través del yoga y disfruta de momentos de tranquilidad y atención plena.   </p>
        </div> */}
      </div>
    </section>
  )
}

export default Hero