import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './container/Header/Header'
import AboutMe from './container/AboutMe/AboutMe'
import Why from './container/Why/Why'
import Hero from './container/Hero/Hero'
import Classes from './container/Classes/Classes'
import Gallery from './container/Gallery/Gallery'
import './App.css';
import FindMe from './container/FindMe/FindMe'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Why/>
      <Hero/>
      <AboutMe/>
      <Classes/>
      <Gallery/>
      <FindMe/>
    </div>
  )
}

export default App