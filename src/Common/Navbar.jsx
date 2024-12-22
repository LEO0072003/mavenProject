import React, { useEffect, useRef , useState } from "react";
import "./common.css";
import logo from "../assets/logo.png";
import smallnav from "../assets/smallnav.png"
import cross22 from "../assets/cross22.png"
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
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

]

function Navbar() {

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

  const sendEmail = (e) => {
    e.preventDefault();
    // Validation logic
    const formElements = form.current.elements;
    const errors = [];

    if (!formElements.from_name.value.trim()) {
      errors.push('Full Name is required.');
    }

    if (!formElements.from_email.value.trim()) {
      errors.push('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(formElements.from_email.value.trim())) {
      errors.push('Enter a valid email address.');
    }

    if (!formElements.from_number.value.trim()) {
      errors.push('Phone Number is required.');
    }

    if (!formElements.from_travel.value.trim()) {
      errors.push('Travel Date is required.');
    }

    if (!formElements.from_duration.value.trim()) {
      errors.push('Duration is required.');
    }

    if (errors.length > 0) {
      alert(errors.join('\n')); // You can customize the error display as needed.
      return;
    }

    emailjs.sendForm("service_v2wateq", 'template_cj1kbsn', form.current, {
        publicKey: 'teMT0rnZ9JGkmP7O5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Successfuly Send");
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Something went wrong")
        },
      );
  };


  return (

    <>

    <nav className={`navbarwrapper ${scrolled ? "scrolled" : ""}`}>

      <div className="navcont">

        {/* left logo  */}
        <NavLink to={"/"}> <img src={logo} alt="logo" className="logo" /> </NavLink>

        {/* nav items */}
        <ul className="navitems">
          {data.map((d, index) =>
            index !== 4 ?
            <NavLink to={d.link} >  <li  key={index}>{d.title}</li> </NavLink>
           :
           <li  onClick={()=>setOpenform2(true)} key={index}>{d.title}</li>

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


{
  openform2 &&

<Email setOpenform2={setOpenform2} form={form} />
}


    </>

  );
}

export default Navbar;
