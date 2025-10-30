import React from 'react'
import logo from '../assets/logo.png'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-image" src={logo} alt="NovaBank logo" />
      </div>
      <nav className="header__actions">
        <a className="header__link" href="#">
          Log in
        </a>
        <button className="header__cta" type="button">
          Create a business account
        </button>
      </nav>
    </header>
  )
}

export default Header
