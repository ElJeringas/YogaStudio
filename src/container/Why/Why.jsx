import React from 'react';
import images from '../../constants/images';
import { PiFlowerLotusLight } from "react-icons/pi";
import './Why.css';
const Why = () => {
  return (
    <section className='section__container why__container'>
      <div className='why__content'>
        <h2 className='section__header'>Por que deberias practicar Yoga?</h2>
        <p>Practicar yoga ofrece un enfoque holístico del bienestar, que abarca beneficios tanto físicos como mentales. A través de una serie de posturas, estiramientos y fuerza muscular. Sus aspectos meditativos fomentan la atención plena, reduciendo el estrés y la ansiedad al tiempo que promueven una sensación de paz interior.</p>
        <ul>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Aumenta tu capacidad cerebral
              </i>
            </span>
          </li>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Te ayuda a respirar mejor
              </i>
            </span>
          </li>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Mejora tu fuerza
              </i>
            </span>
          </li>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Mejora tu concentración
              </i>
            </span>
          </li>
          <li>
            <span>
              <i className='ri-checkbox-circle-fill'>
              <PiFlowerLotusLight />
              Mejora tu estado de animo
              </i>
            </span>
          </li>
        </ul>
      </div>
      <div className='why__image'>
        <img src={images.home02} alt='why'/>
      </div>
    </section>
  )
}

export default Why