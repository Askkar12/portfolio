import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import Qualification from './components/Qualification/Qualification'

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Qualification/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
