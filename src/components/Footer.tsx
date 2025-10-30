import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">NovaBank</div>
        <div className="footer__links">
          <div className="footer__column">
            <h4 className="footer__heading">Contact</h4>
            <a href="#">Contact</a>
            <a href="#">Who we are</a>
          </div>
          <div className="footer__column">
            <h4 className="footer__heading">Legal information</h4>
            <a href="#">Legal terms</a>
            <a href="#">Privacy policy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        This is a demo of the Identfy by Izertis ecosystem | For further information, please contact XXX@izertis.com
      </div>
    </footer>
  )
}

export default Footer
