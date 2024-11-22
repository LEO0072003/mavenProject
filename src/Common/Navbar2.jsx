import React, { useEffect, useState , useRef } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { IoReorderThreeSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import {motion} from "framer-motion"
import { NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
// import { ImCross } from "react-icons/im";
import { RIGHTSIDECONTENT2 } from '../Data/PackageDetail'


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
                   <NavLink to={item.link}> <p key={index} className="sinnav">
                        {item.title}
                    </p> </NavLink>
                ))}
            </div>
        </motion.div>


    </div>

    {
  openform2 &&


<div className="formwrap">

  <div className="formconta">

  <div className={`formdetail`}>
            <h3 className='flex items-center justify-between'>
              {RIGHTSIDECONTENT2.heading}
              <ImCross onClick={()=>setOpenform2(false)} fontSize={26} className='cursor-pointer' />
            </h3>

            <form ref={form} onSubmit={sendEmail}>
              <label>
                <p>
                  Full Name <span>*</span>
                </p>
                <input type="text" name='from_name' />
              </label>

              <label>
                <p>
                  Email <span>*</span>
                </p>
                <input type="email" name='from_email' />
              </label>

              <div className="dohalf">
                <input
                  type="number"
                  placeholder="+91"
                  className="phonenumbeint"
                />
                <input
                  type="number"
                  placeholder="Your Phone*"
                  className="myphone"
                    name='from_number'
                />
              </div>

              <div className="dohalf">
                <input
                  type="text"
                  placeholder="Travel Date*"
                  className="Traveldate"
                  name='from_travel'
                />
                <input
                  type="text"
                  placeholder="Duration*"
                  className="Duration"
                  name='from_duration'
                />
              </div>

              <textarea
                className="textaremesge"
                name="message"
                id=""
                placeholder="Message..."

              ></textarea>

              <button className="requeeqebtn">
                <span>REQUEST ENQUIRY</span>
              </button>
            </form>
          </div>

  </div>

</div>

}

    </>
  );
}

export default Navbar2;
