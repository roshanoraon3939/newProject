import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} className='logo' alt='' />

      <ul className='header-menu'>
        <li>Home</li>
        <li>Exercises</li>
        <li>Testiomonials</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Header
