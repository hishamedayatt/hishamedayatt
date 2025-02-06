import React from 'react'
import { FaHourglass, FaUserShield, FaAward,FaUserTie, FaHeadset,FaRegCheckCircle } from "react-icons/fa";
// import { FaClock, FaCheck, FaTruck, FaHeadset, , FaDollarSign } from "react-icons/fa";
import './Whychoose.css'
import { motion } from 'framer-motion'
import {fedeIn} from '../../motion'
import fig from '../../assets/why.webp'

const Whychoose = () => {

    // const features = [
    //     {
    //       icon: <FaChartLine />,
    //       title: "Proven Results",
    //       description: "We deliver measurable success and growth to your business.",
    //     },
    //     {
    //       icon: <FaUsers />,
    //       title: "Expert Team",
    //       description: "Our consultants are experienced professionals in their fields.",
    //     },
    //     {
    //       icon: <FaAward />,
    //       title: "Quality Assurance",
    //       description: "We ensure the highest quality in our services.",
    //     },
    //     {
    //       icon: <FaHeadset />,
    //       title: "24/7 Support",
    //       description: "Our team is always available to assist you, anytime, anywhere.",
    //     },
    //   ];



    const features = [
      {
        icon: <FaUserTie  style={{color:'#5f3636'}}/>, // Replace with an appropriate icon or an image
        title: "Expert Guidance",
        description: "Personalized solutions from experienced professionals to ensure your business thrives with the right advice and support.",
      },
      {
        icon: <FaRegCheckCircle style={{color:'#31b148'}} />,
        title: "Time Efficiency",
        description: "Streamlined processes to save your time, letting you focus on growing your business.",
      },
      {
        icon: <FaUserShield style={{color:'#c6531d'}}/>,
        title: "Compliance & Accuracy",
        description: "Ensuring all processes adhere to UAE regulations with precision and reliability.",
      },
      {
        icon: <FaHeadset  style={{color:'black'}}/>,
        title: "Comprehensive Support",
        description: "Providing end-to-end assistance, from setup to daily operations, for seamless business management.",
      },
    ];
    // const features = [
    //   {
    //     icon: <FaChartLine />,
    //     title: "Proven Results",
    //     description: "We deliver measurable success and growth to your business.",
    //   },
    //   {
    //     icon: <FaUsers />,
    //     title: "Expert Team",
    //     description: "Our consultants are experienced professionals in their fields.",
    //   },
    //   {
    //     icon: <FaAward />,
    //     title: "Quality Assurance",
    //     description: "We ensure the highest quality in our services.",
    //   },
    //   {
    //     icon: <FaHeadset />,
    //     title: "24/7 Support",
    //     description: "Our team is always available to assist you, anytime, anywhere.",
    //   },
    // ];



  return (
    // <div className="why-choose-us">

    //   <motion.div  variants={fedeIn("up",0.3)}
    //                 initial="hidden"
    //                 whileInView={"show"}
    //                 viewport={{once:false,amount:0.7}}
    //                 z className="features-grid">
    //     {features.map((feature, index) => (
    //       <div className="feature" key={index}>
    //         <div className="icon">{feature.icon}</div>
    //         <div className='content'>
    //           <h3>{feature.title}</h3>
    //           <p>{feature.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </motion.div>
    // </div>
  <div className="why-choose-us">
    <div className="right">
     <motion.div  variants={fedeIn("up",0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:true,amount:0.7}}
                    z className="featuress">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon">{feature.icon}</div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
      
    </div>
    <div className="left">
        <img src={fig} alt="Professional" className="profile-img" />    

    </div>
</div>
      );
    };
    
    

export default Whychoose
