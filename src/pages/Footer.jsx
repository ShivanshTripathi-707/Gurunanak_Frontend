import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3 className="footer-title">Gurunanak Boys PG</h3>
          <p className="footer-text">Comfort, safety, and convenience for every resident.</p>
        </div>

        <div className="footer-section">
          <h4><i className="fa-solid fa-location-dot"></i> Address</h4>
          <p>RFC enclave, C-17, Road, Main 80 Feet Road, V I T Campus, <br /> Jagatpura, Jaipur, Rajasthan 302017</p>
        </div>

        <div className="footer-section">
          <h4><i className="fa-solid fa-phone"></i> Contact</h4>
          <a href="tel:+91 82905 65654"><p>+91 82905 65654</p></a>
        </div>

        <div className="footer-section">
          <h4><i className="fa-solid fa-envelope"></i> Email</h4>
          <a href="mailto:chhabrasinghravindra@gmail.com"><p>chhabrasinghravindra@gmail.com</p></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gurunanak Boys PG | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
