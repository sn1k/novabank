import React from 'react'
import logo from '../assets/logo.png'
import partnerLogo from '../assets/partner-logo.png'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__logo">NovaBank</div>
          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__heading">Contact</h4>
              <a href="mailto:hello@novabank.com">Email us</a>
              <a href="#">Schedule a call</a>
            </div>
            <div className="footer__column">
              <h4 className="footer__heading">Legal information</h4>
              <a href="#">Legal terms</a>
              <a href="#">Privacy policy</a>
              <a href="#">Cookies policy</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          This is a demo of the Identfy by Izertis ecosystem | For further information, please contact XXX@izertis.com
        </div>
      </div>
    </footer>
  )
}

export default Footer
