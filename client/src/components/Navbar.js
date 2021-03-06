import React, {useContext}from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)


  const logoutHandler = event => {
    event.preventDefault()
    auth.isAuthenticated = false
    history.push('/')
  }

  return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Эмулятор майнинга</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/auth">Приступить</NavLink>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>Выйти</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}