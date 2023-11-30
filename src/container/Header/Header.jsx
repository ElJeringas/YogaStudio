import images from '../../constants/images'
import './Header.css'
const Header = () => {
  return (
    <header id='home'>
      <div className='section__container header__container'>
        <div className='header__content'>
          <h1>Yoga Consciente</h1>
          <h2>Explora conmigo esta nueva practica.</h2>
          <button className="btn">Quiero saber Mas</button>
        </div>
        <div className='header__image'>
          <img src={images.header} alt='header'/>
        </div>
      </div>
    </header>
  )
}

export default Header