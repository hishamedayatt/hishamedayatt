import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { FaFacebook,FaLinkedin,FaWhatsapp,FaPhone,FaEnvelope,FaLocationPin } from 'react-icons/fa6'

const Footer = () => {
  return (

       <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">BD ASSOCIATES</h2>
          <p className="footer-description">
            Accelerate innovation with world-class tech teams. We’ll match you
            to an entire remote team of incredible freelance talent.
          </p>
          <div className="social-links">
            <a href="#facebook" className="social-icon"><FaFacebook style={{color:'#0165E1'}}/></a>
            <a href="#twitter" className="social-icon"><FaLinkedin style={{color:'	#0A66C2'}}/></a>
            <a href="#linkedin" className="social-icon"><FaWhatsapp style={{color:'#28D146'}}/></a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Business Setup</li>
            <li>Customs Clearance</li>
            <li>Documentaion</li>
            <li>visa&Immigration</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to='hero'>Home</Link></li>
            <li><Link to='about'>About Company</Link></li>
            <li><Link to='service'>Services</Link></li>
            <li><Link to='why-choose-us'>Why-Choose</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
        <h3>Contact Information</h3>
          <div className='contact1'>
          
          <ul>
           <a href="tel:++971 65346194"> <li className='list'><FaPhone className='ab' /><p>+971 65346194</p></li></a>
           <a href="mailto:bdassociatesfze@outlook.com"><li className='list'><FaEnvelope className='ab'/><p>bdassociatesfze@outlook.com</p></li></a>
            <a href="https://maps.app.goo.gl/bjzpp2EfDUW6noSx8"><li className='list'><FaLocationPin className='ab'/><p>LOB2-Office No.F37 <br /> Hamriyah Free Zone Sharja-UAE</p></li></a>
          </ul>
          </div>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyrights 2025 BD Associates. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
