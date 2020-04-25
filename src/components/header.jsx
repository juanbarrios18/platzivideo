import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar'
import {logoutRequest } from '../actions'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = props => {
  const { user } = props
  const hasUser = Object.keys(user).length > 0

  const handleLogout = () => {
    props.logoutRequest({})
  }
  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} className='header__img' alt='header__img' />
      </Link>
      <div className='header__menu'>

        <div className='header__menu_profile'>
          {hasUser
            ? <img src={gravatar(user.email)} alt={user.email} />
            : <img src={userIcon} alt='user-icon' />}
          <p>perfil</p>
        </div>

        <ul>
          {hasUser
            ? <li><a href='/'>{user.name}</a></li>
            : null}
          {hasUser
            ? <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li>
            : <Link to='/login'>Iniciar sesión</Link>}
        </ul>

      </div>
    </header>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
