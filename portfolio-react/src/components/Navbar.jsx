import React from 'react'
import '../assets/styles/Navbar.css'
import Instagram from '../assets/img/instagram.png'
import Facebook from '../assets/img/facebook.png'
import Linkedin from '../assets/img/linkedin.png'

export const Navbar = () => {
  return (
    <aside id='nav'>
        <div className='h1'>
      <h1 className='name'>Gabriel Braga</h1>
    </div>
    <div className='list'>
        <ul className='ul'>
            <li>Home</li>
            <li>About my</li>
            <li>Certification</li>
            <li>Repositories</li>
            <li>Contact</li>
        </ul>
    </div>
     <div className='links'>
        <button><img src={Instagram}/></button>
        <button><img src={Facebook}/></button>
        <button><img src={Linkedin}/></button>
     </div>   
    </aside>
  )
}
