import React from 'react'
import { LiaFileDownloadSolid } from "react-icons/lia";
import { BsWhatsapp } from 'react-icons/bs';

import './Classes.css';
import horarios from '../../assets/Horario.pdf'
const Classes = () => {

  const downloadSchedule = () => {
    const cvUrl = horarios;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Horario de Clases.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className='membership' id='membership'>
      <div className='section__container membership__container'>
        <p className='section__subheader'>Tabla de Precios</p>
        <h2 className='section__header'>Sesiones de Yoga</h2>
        <div className='membership__grid'>
          <div className='membership__card'>
            <h4 className='membership__card-title'>Sesiones Diarias</h4>
            <h2><sup>$</sup>5</h2>
            <p><sup>Por Sesión</sup></p>

            <a type='button' href='https://api.whatsapp.com/send/?phone=593996819305&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer" className='btn membership__btn'>Empezemos</a>
          </div>

          <div className='membership__card'>
            <h4 className='membership__card-title'>Sesión de terapia:</h4>
            <div className='membership__card-sesions_container'>
            <div className='membership__card-sesions'>
              <h2><sup>$</sup>30</h2>
              <p><sup>Presencial</sup></p>
            </div>
            <div className='membership__card-sesions'>
              <h2><sup>$</sup>25</h2>
              <p><sup>Online</sup></p>
            </div>
            </div>
            <a type='button' href='https://api.whatsapp.com/send/?phone=593996819305&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer" className='btn membership__btn'>Empezemos</a>
          </div>

          <div className='membership__card'>
            <h4 className='more'>Conoce otras tarifas en:</h4>
              <a className='membership__card-more' href='https://api.whatsapp.com/send/?phone=593992987536&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer">
                <BsWhatsapp className='classes__image-icon'/>
                <p>Viva Conciente</p>
              </a>
              <a className='membership__card-more' href='https://api.whatsapp.com/send/?phone=593979221447&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer">
                <BsWhatsapp className='classes__image-icon'/>
                <p>Kaizen Studio</p>
              </a>
         </div>
          <div className='membership__card'>
            <h4 className='membership__card-title'>Descarga los horarios:</h4>
            <button className='btn membership__btn_dwn' onClick={downloadSchedule}><LiaFileDownloadSolid size={35} className='download'/>Descargar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Classes