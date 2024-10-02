import React from 'react'
import './Qualification.css'
import { BsPatchCheckFill } from "react-icons/bs";

function Qualification() {
  return (
    <section id='qualification' className='qualification_section'>
       <h5>My Personal Journey</h5>
       <h2>Qualification</h2>
       <div className="container qualification_container">
          <div className=" qualification_frontend">
            <div className=" qualification_content">
              <article className=' qualification_details'>
              <BsPatchCheckFill className=' qualification_details-icon'/>
              <div>
              <h4>MSC PHYSICS</h4>
              <small className='text-light'>Karpagam University-2022</small>
              </div> 
              </article>
              <article className=' qualification_details'>
              <BsPatchCheckFill  className=' qualification_details-icon'/>
              <div>
              <h4>BSC PHYSICS</h4>
              <small className='text-light'>Bharathiar University-2020</small>
              </div>
              </article>
              <article className=' qualification_details'>
              <BsPatchCheckFill  className=' qualification_details-icon'/>
              <div>
              <h4>HSC</h4>
              <small className='text-light'>State Board-2017</small>
              </div>
              </article>
              <article className=' qualification_details'>
              <BsPatchCheckFill  className=' qualification_details-icon'/>
             <div>
             <h4>SSLC</h4>
             <small className='text-light'>State Board-2015</small>
             </div>
              </article>
            </div>
          </div>
          </div>

    </section>
  )
}

export default Qualification
