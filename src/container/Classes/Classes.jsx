import React from 'react'
import './Classes.css';
const Classes = () => {
  return (
    <section className='membership' id='membership'>
      <div className='section__container membership__container'>
        <p className='section__subheader'>Tabla de Precios</p>
        <h2 className='section__header'>Sesiones de Yoga</h2>
        <div className='membership__grid'>
          <div className='membership__card'>
            <h4 className='membership__card-title'>Sesiones Mensuales</h4>
            <h2><sup>$</sup>45</h2>
            <h3><strong>Por un Mes</strong></h3>
            <h4>Acceso a todo el contenido</h4>
            <p>Clases grupales</p>
            <h4>Seguimiento Individual</h4>
            <p>Orientacion Espiritual</p>
            <p>Charlas y Eventos</p>
            <button className='btn membership__btn'>Empezemos</button>
          </div>
          <div className='membership__card'>
            <h4 className='membership__card-title'>Sesiones Quincenales</h4>
            <h2><sup>$</sup>25</h2>
            <h3><strong>Por 15 Dias</strong></h3>
            <h4>Acceso a todo el contenido</h4>
            <p>Clases grupales</p>
            <p>Orientacion Espiritual</p>
            <p>Charlas y Eventos</p>
            <br/><br/>
            <button className='btn membership__btn'>Empezemos</button>
          </div>
          <div className='membership__card'>
            <h4 className='membership__card-title'>Sesiones Diarias</h4>
            <h2><sup>$</sup>5</h2>
            <h3><strong>Por un Dia</strong></h3>
            <h4>Acceso a todo el contenido</h4>
            <p>Clases grupales</p>
            <p>Orientacion Espiritual</p>
            <p>Sin seguimiento Individual</p>
            <br/><br/>
            <button className='btn membership__btn'>Empezemos</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Classes