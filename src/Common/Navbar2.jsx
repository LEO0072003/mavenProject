import React, { useEffect, useState , useRef } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { IoReorderThreeSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import {motion} from "framer-motion"
import { NavLink } from "react-router-dom";
import Email from "./Email";


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


  const [openform2 , setOpenform2] = useState(false);
  const form = useRef();


  return (
    <>
    <div>



      <div className={`navbar2wrap ${scrolled ? "scrolled" : ""}`}>

        <div className="navbarCont2">
          {/* left logo  */}
         <NavLink to={"/"}> <img src={logo} alt="" /> </NavLink>

          {/* nav items */}
          <ul className="navitems2">
            {data.map((d, index) =>
              index !== 4 ?
              <NavLink to={d.link} >  <li  key={index}>{d.title}</li> </NavLink>
             :
             <li  className="cursor-pointer" onClick={()=>setOpenform2(true)} key={index}>{d.title}</li>

            )}
          </ul>


<IoReorderThreeSharp onClick={()=>setOpensidebar(true)} className="IoReorderThreeSharp "  />


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
                   <NavLink to={item.link}> <p onClick={()=>{
                    if(item.title === "Contact"){
                     setOpenform2(true)
                     setOpensidebar(false)
                    }
                 }} key={index} className="sinnav">
                        {item.title}
                    </p> </NavLink>
                ))}
            </div>
        </motion.div>


    </div>

    {
  openform2 &&

 <Email setOpenform2={setOpenform2} form={form} />
}

    </>
  );
}

export default Navbar2;
