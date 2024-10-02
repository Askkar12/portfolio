import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
function Contact() {
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className='contact_option'>
        <MdOutlineEmail  className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>askkaraliyar35@gmail.com</h5>
          <a href="mailto:askkaraliyar35@gmail.com" target='blank'>Send a message</a>
        </article>
        <article className='contact_option'>
        <BsWhatsapp  className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>9074587656</h5>
          <a href="http://api.whatsapp.com/send?phone=9074587656" target='blank'>Send a message</a>
        </article>
      </div>
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name'required />
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>


   </section>
  )
}

export default Contact
