import images from '../../constants/images';
import './NavBar.css'
const NavBar = () => {
  return (
      <nav>
        <div className='nav__logo'>
          <img src={images.logo} alt='logo'/>
          {/* <span>Gabriela Yoga</span> */}
        </div>
        <ul className='nav__links'>
          <li className='links'><a href='#home'>Home</a></li>
          <li className='links'><a href='#membership'>Clases</a></li>
          <li className='links'><a href='#about'>Sobre de Mi</a></li>
          <li className='links'><a href='#gallery'>Galeria</a></li>
          <li className='links'><a href='#contact'>Contactame</a></li>
        </ul>
      </nav>
  )
}

export default NavBar