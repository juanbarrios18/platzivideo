import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import user from '../assets/static/user-icon.png'

const Header = () => (
  <header className='header'>
    <img src={logo} className='header__img' alt='header__img' />
    <div className='header__menu'>
      <div className='header__menu_profile'>
        <img src={user} alt='user-icon' />
        <p>perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta a</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
)

export default Header
