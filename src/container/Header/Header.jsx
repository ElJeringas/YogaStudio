import images from '../../constants/images'
import './Header.css'
const Header = () => {
  return (
    <header id='home'>
      <div className='section__container header__container'>
        <div className='header__content'>
          <h1>Psicologia<br/><span>Holistica</span></h1>
          {/* <h2>Holistica</h2> */}
          <a type='button' href='https://api.whatsapp.com/send/?phone=593996819305&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer" className='btn' >Contactame</a>
        </div>
        <div className='header__image'>
          <img src={images.home} alt='header'/>
        </div>
      </div>
    </header>
  )
}

export default Header