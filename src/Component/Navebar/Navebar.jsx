import React, { useEffect, useRef, useState } from 'react'
import './Navebar.css'
import logo from '../../assets/LOGO12.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import close from '../../assets/cross.png'

const Navebar = () => {
  const menuRef = useRef();
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    })
  },[])
  const [mobileMenu,setmobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true);

  }
  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
  const colseMenu = ()=>{
    menuRef.current.style.right="-350px";
  }


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul ref={menuRef} className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={-260} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='service' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='why-choose-us' smooth={true} offset={-260} duration={500}>Why Choose</Link></li>
        <li><button className={`btn ${sticky ? 'btnn':''}`}><Link  to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
        {/* <img src={close} onClick={colseMenu} alt="" className='menu-close' /> */}
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navebar
