import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'

export const Navbar = () => {
  const history = useHistory()
  

  const logoutHandler = event => {
    event.preventDefault()
    history.push('/')
  }

  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Эмулятор майнинга</a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/auth">Приступить</NavLink></li>
        <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
      </ul>
    </div>
    </nav>
  )
}