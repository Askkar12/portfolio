import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/asset/portfolio1.jpg'
import IMG2 from '../../assets/asset/portfolio2.jpg'
import IMG3 from '../../assets/asset/portfolio3.jpg'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG1} alt="" />
        </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://media-player-frontend-sooty.vercel.app/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG2} alt="" />
        </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://bmi-calculator-one-psi.vercel.app/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG3} alt="" />
        </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://gsap-website-six.vercel.app/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>
      </div>
    </section>
  )
}

export default Portfolio
