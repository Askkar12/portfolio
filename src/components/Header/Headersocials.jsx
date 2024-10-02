import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Headersocials() {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com"target='blank'><BsLinkedin /></a>
      <a href="https://github.com"target='blank'><FaGithub /></a>
    </div>
  )
}

export default Headersocials
