import React,{ useState, useEffect } from 'react'
import './Top.css'
import { FaArrowUp } from 'react-icons/fa';
import up from '../../assets/up-arrow.png'

const Top = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
          if (window.scrollY > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
          transition:0.5
        });
      };
    
  return (
    <div>
       {isVisible && (
        <button onClick={scrollToTop} className='top'
        >
          {/* <FaArrowUp style={{color:"black"}}/> */}
          <img src={up} alt="" />
        </button>
      )}
    </div>
  )
}

export default Top
