import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Logo</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="http://facebook.com"><FaFacebookF /></a>
        <a href="http://instagram.com"><FiInstagram /></a>
        <a href="http://twitter.com"><BsTwitterX /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;portfolio .All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
