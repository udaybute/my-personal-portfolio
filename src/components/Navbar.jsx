import React from 'react'
import logo from "../assets/Ub1.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between '>
        <div className='flex flex-shrink-0 items-center '>
           <img className='mx-2 max-w-10' src={logo} alt="logo" />
        </div>
        <div className='flex items-center justify-center gap-4 text-2xl'>
           <a href="https://www.linkedin.com/in/udaybute1997/"><FaLinkedin/></a> 
           <a href="https://github.com/udaybute"><FaGithub/></a>
            <FaYoutube/>
        </div>
    </nav>
  )
}

export default Navbar