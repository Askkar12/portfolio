import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

function Nav() {
  const[activenav,setactivenav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setactivenav('#')} className={activenav==='#'?'active':''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setactivenav('#about')} className={activenav==='#'?'about':''}><AiOutlineUser /> </a>
      <a href="#experience" onClick={()=>setactivenav('#experience')} className={activenav==='#'?'experience':''}><BiBook /> </a>
      <a href="#portfolio" onClick={()=>setactivenav('#portfolio')} className={activenav==='#'?'portfolio':''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setactivenav('#contact')} className={activenav==='#'?'contact':''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
