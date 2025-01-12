import React from 'react'
import './Contactus.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/envelope.png'
import call_icon from '../../assets/telephone.png'
import location_icon from '../../assets/location.png'
import clock from '../../assets/clock1.png'
import send from '../../assets/send.png'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {fedeIn} from '../../motion'
import { toast } from 'react-toastify'



const Contactus = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "87c51369-3022-48e5-b8bd-70dab07d6351");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <motion.div variants={fedeIn("down",0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:false,amount:0.7}}
                      className='contact'>
      <div className="contact-col">
        <h3>Send us Message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente ut velit</p>
        <ul>
          <a href="mailto:bdassociatesfze@outlook.com"><li><img src={mail_icon} alt="" />bdassociatesfze@outlook.com</li></a>
          <a href="tel:++971 65346194"><li><img src={call_icon} alt="" />+971 65346194</li></a>
          <a href="https://maps.app.goo.gl/bjzpp2EfDUW6noSx8"><li><img src={location_icon} alt="" />LOB2-Office No.F37 <br />Hamriyah Free Zone <br />Sharja-UAE</li></a>
          <li><img src={clock} alt="" /> Monday - Thuresday : 8:00 AM - 4:00 PM <br />Friday : 8:00 AM - 12:00 PM</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
  
          <input type="text" name='name' placeholder='Enter your name' required />
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <input type="text" name='subject' placeholder='Subject' required />
          <textarea name="message" rows='6' placeholder='Enter your messege here' required></textarea>
          <button type='submit' className='btn btn-sub'>{ result ? result : "Send Messsage" }<img src={send} alt="" /></button>
        </form>
        {/* <span>{result}</span> */}
      </div>
      
    </motion.div>
  )
}

export default Contactus
