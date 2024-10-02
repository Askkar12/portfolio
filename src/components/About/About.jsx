import React from 'react'
import './About.css'
import ME from  '../../assets/asset/askkar.about.jpg'
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <VscFolderLibrary  className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>
          <p>I am an aspiring Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), driven by a passion for creating dynamic, responsive web applications. While I don’t yet have professional experience, I have developed a solid foundation through personal projects, online courses, and hands-on practice, focusing on building full-featured applications using modern web technologies.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
