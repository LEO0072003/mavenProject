import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { IoReorderThreeSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import {motion} from "framer-motion"
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

function Navbar2() {

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
    <div>

      {/* tag one  */}
      {/* <div className="saletagwrap">
        <p>SALE INFO</p>
      </div> */}


      <div className={`navbar2wrap ${scrolled ? "scrolled" : ""}`}>

        <div className="navbarCont2">
          {/* left logo  */}
         <NavLink to={"/"}> <img src={logo} alt="" /> </NavLink>

          {/* nav items */}
          <ul className="navitems2">
            {data.map((d, index) =>
              // index <= 4 ? (
               <NavLink key={index} to={d.link}><li key={index}>{d.title}</li> </NavLink> 
              // ) : (
              //   <button key={index} className="navbutton2">
              //     <span>Take a Trip </span>
              //   </button>
              // )
            )}
          </ul>

        
<IoReorderThreeSharp onClick={()=>setOpensidebar(true)} className="IoReorderThreeSharp"  />


        </div>


      </div>

      <motion.div
            className={`slidebarslidecont ${opensidebar ? 'open' : ''}`}
            initial={{ x: '100%' }} // Initial position off-screen
            animate={{ x: opensidebar ? 0 : '100%' }} // Slide in/out based on state
            transition={{ duration: 0.3 }} // Smooth transition
        >
            <div className="cross22">
                {/* <img onClick={() => setOpensidebar(false)} src={cross22} alt="Close" /> */}
                <ImCross fontSize={40} color="white" onClick={() => setOpensidebar(false)} />

            </div>
            <div className="allnavitems">
                {data.map((item, index) => (
                   <NavLink to={item.link}> <p key={index} className="sinnav">
                        {item.title}
                    </p> </NavLink>
                ))}
            </div>
        </motion.div>

      
    </div>
  );
}

export default Navbar2;
