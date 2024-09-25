import React, { useEffect, useState } from "react";
import "./common.css";
import logo from "../assets/logo.png";
import smallnav from "../assets/smallnav.png"
import cross22 from "../assets/cross22.png"
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const data = [
  {
    title:"Home" , 
    link:"/" 
  } , 
  {
    title:"Places" , 
    link:"/place" 
  } , 
  {
    title:"Packages" , 
    link:"/packages" 
  } , 
  {
    title:"About" , 
    link:"/about" , 
  } , 
  {
    title:"Contact" , 
    link:""
  } ,
  {
    title:"" , 
    link:""
  }
]

function Navbar({setOpenform}) {

  const [opensidebar, setOpensidebar] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <>
   
    <nav className={`navbarwrapper ${scrolled ? "scrolled" : ""}`}>

      <div className="navcont">

        {/* left logo  */}
        <NavLink to={"/"}> <img src={logo} alt="logo" className="logo" /> </NavLink>

        {/* nav items */}
        <ul className="navitems">
          {data.map((d, index) =>
            // index <= 4 ? (
            <NavLink to={d.link}>  <li key={index}>{d.title}</li> </NavLink>
            // ) : (
            //   <button onClick={()=>setOpenform(true)} className="navbutton">
            //     <span>Take a Trip </span>
            //   </button>
            // )
          )}
        </ul>

          <img onClick={()=>setOpensidebar(true)} src={smallnav} loading="lazy" alt="smallnav" className="smallnav" />

      </div>


    </nav>


    

    <motion.div
            className={`slidebarslidecont ${opensidebar ? 'open' : ''}`}
            initial={{ x: '100%' }} // Initial position off-screen
            animate={{ x: opensidebar ? 0 : '100%' }} // Slide in/out based on state
            transition={{ duration: 0.3 }} // Smooth transition
        >
            <div className="cross22">
                <img onClick={() => setOpensidebar(false)} src={cross22} alt="Close" />
            </div>
            <div className="allnavitems">
                {data.map((item, index) => (
                  <NavLink to={item.link}> <p key={index} className="sinnav">
                        {item.title}
                    </p> </NavLink> 
                ))}
            </div>
        </motion.div>

    </>

  );
}

export default Navbar;
