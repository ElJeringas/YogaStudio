import React from 'react';
import images from '../../constants/images';
import { PiFlowerLotusLight } from "react-icons/pi";
import './Why.css';
const Why = () => {
  return (
    <section className='section__container why__container'>
      <div className='why__content'>
        <h2 className='section__header'>Por que deberias practicar Yoga?</h2>
        <p>Practicar yoga ofrece un enfoque holístico del bienestar, que abarca beneficios tanto físicos como mentales. A través de una serie de posturas, estiramientos y fuerza muscular. El yoga es una herramienta de autoconocimiento que ofrece un enfoque holístico del bienestar, abarcando beneficios tanto físicos como mentales. Sus aspectos meditativos fomentan la atención plena, reduciendo el estrés y la ansiedad al tiempo que promueven la conexión con la paz que ya somos</p>
        <ul>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Mejora la concentración
              </i>
            </span>
          </li>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Aaumenta la energía vital
              </i>
            </span>
          </li>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Mejora el equilibrio y la coordinación
              </i>
            </span>
          </li>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Fortalece el sistema inmunológico
              </i>
            </span>
          </li>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Ayuda a dormir mejor
              </i>
            </span>
          </li>
        </ul>
      </div>
      <div className='why__image'>
        <img src={images.why} alt='why'/>
      </div>
    </section>
  )
}

export default Why