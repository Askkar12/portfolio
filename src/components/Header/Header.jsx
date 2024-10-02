import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/asset/me.png.png'
import Headersocials from './Headersocials'

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I,m</h5>
        <h1>Askkar A</h1>
        <h5 className='text-light'>Fullstack Developer </h5>
        <CTA/>
        <Headersocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#Contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
