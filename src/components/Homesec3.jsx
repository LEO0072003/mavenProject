import React from "react";
import "./styles.css";
import img from "../assets/Img.png";
import {motion} from "framer-motion"
import bannerimg from "../assets/bannerimg.png"
import bannerimgfilter from "../assets/banfiltes3.png"
import { BANNER_DETAIL } from "../Data/Home";

function Homesec3({setOpenform}) {
  return (
    <div className="sec3wrap">

      <motion.div
        initial={{x:-200 , opacity:0}}
        whileInView={{x:0 , opacity:1}}
       transition={{delay:0.8 , x:{type:"spring" , stiffness:50 } , opacity:{duration:0.4} , ease:"easeInOut" , duration:0.5}} 
      className="sec3cont">
        {/* left img */}
        <img src={BANNER_DETAIL.bannerImg} alt="" />

        <div className="sec3right">
          {/* left side  */}

          <div className="se3righleft">
            <p>{BANNER_DETAIL.exclusiveOfferText}</p>
            <h3>{BANNER_DETAIL.offerText}</h3>
          </div>

          <button onClick={()=>setOpenform(true)} className="booknow">
            <span>Book Now</span>
          </button>
        </div>

      </motion.div>

       <div className="sec3disbanner">

        <img src={BANNER_DETAIL.specialOfferImg} alt="bannerimg" className="bannerimg" />

         <img src={bannerimgfilter} alt="bannerimgfilter" className="bannerimgfilter" />

         <div className="s3bancontent">
          <h4>Discover Special Offers!</h4>
          <p>{BANNER_DETAIL.offerText}</p>
          <button onClick={()=>setOpenform(true)}><span>Book Now</span></button>
         </div>

       </div>

    </div>
  );
}

export default Homesec3;
