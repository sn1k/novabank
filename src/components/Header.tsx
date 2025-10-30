import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">NovaBanco</div>
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
