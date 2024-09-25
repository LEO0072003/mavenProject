import React from "react";
import "./home.css";
import background from "../assets/homebackground.png";
import backgroundFilter from "../assets/homefilter.png";
import Navbar from "../Common/Navbar";
import { FaArrowRight } from "react-icons/fa";
import {motion} from "framer-motion"
import { HEADER_DATA } from "../Data/Home";

function Home({setOpenform}) {


  return (
    <div className="homeWrap">
        
      <img
        src={background}
        loading="lazy"
        alt="background"
        className="background"
      />
      <img
        src={backgroundFilter}
        alt="backgroundFilter"
        loading="lazy"
        className="backgroundFilter"
      />

      <Navbar setOpenform={setOpenform} />

      <div className="homeCont">

        <div 
      
        className="homeContent">
          <motion.h2 
           initial={{x:-100 , opacity:0}}
           animate={{x:0 , opacity:1}}
          transition={{delay:0.2 , x:{type:"spring" , stiffness:60 } , opacity:{duration:0.4} , ease:"easeIn" , duration:1}} 
          
          >{HEADER_DATA.heading}</motion.h2>
          <motion.p  
             initial={{x:-100 , opacity:0}}
             animate={{x:0 , opacity:1}}
            transition={{delay:0.2 , x:{type:"spring" , stiffness:60 } , opacity:{duration:1} , ease:"easeIn" , duration:0.6}} 
          >
            {HEADER_DATA.para}
          </motion.p>
          <motion.button onClick={()=>setOpenform(true)}
            initial={{x:-100 , opacity:0}}
            animate={{x:0 , opacity:1}}
           transition={{delay:0.4 , x:{type:"spring" , stiffness:60 } , opacity:{duration:0.6} , ease:"easeIn"}} 
          >
            <span>{HEADER_DATA.buttonText}</span> <FaArrowRight />{" "}
          </motion.button>
        </div>

      </div>


    </div>

  );
}

export default Home;
