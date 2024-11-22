import Navbar2 from "../Common/Navbar2"
import "./about.css"
import img1 from '../assets/Rectangle1960.png'
import img3 from '../assets/Rectangle18.png'
import { useRef, useState } from "react";
import { RIGHTSIDECONTENT2 } from "../Data/PackageDetail";
import { ImCross } from "react-icons/im";
import emailjs from '@emailjs/browser';
import arrright from "../assets/arrow-right-02.png"
import Footer from '../Common/Footer'
import Footer2 from '../Common/Footer2'
import toast from "react-hot-toast";

import a2 from "../assets/a2.jpg"
import a3 from "../assets/a3.jpg"
import a4 from "../assets/a4.jpg"


const data = [
    {
       img: a4 ,
        title:"Affordable Andaman Adventures: Explore the Islands with Us" ,
        para:"ManvenAndaman, a leading travel agency nestled in the mesmerizing islands of Andaman, was founded by the passionate couple Prashant Ullal and Anita Singh. With a remarkable experience of 10 years in the industry, we dedicate ourselves to providing you with an unforgettable travel experience at an affordable price. Our expertise includes crafting individualized itineraries that cater to your specific interests and tastes, from immaculate beaches to beautiful coral reefs."
    }  ,
    {
       img: a2 ,
        title:"The Leading Travel Agency in Andaman: Committed to Delivering Your Best Experience" ,
        para:"At ManvenAndaman, a leading travel agency nestled in the mesmerizing islands of Andaman, we are passionate about delivering the best travel experiences. Founded by the dedicated couple Prashant Ullal and Anita Singh, we bring over 10 years of experience in the industry. Our commitment is to provide you with an unforgettable travel experience at an affordable price." ,
        para2:"We specialize in crafting personalized tour plans that cater to your specific interests and tastes, from immaculate beaches to beautiful coral reefs. Our Andaman packages are designed to ensure you enjoy the best experience possible, tailored to your preferences."
    }  ,
    {
      img: a3 ,
        title:"Our Mission" ,
        para:"We provide exceptional personalized travel services and tailored tour plans that cater to the unique interests and needs of our travelers. Our team works diligently to ensure hassle-free planning, offering expert travel guidance and outstanding customer service. With a focus on delivering unforgettable travel experiences, we are dedicated to ensuring a stress-free travel journey from start to finish."
    }  ,
]


function About() {

  const [openform , setOpenform ] = useState(false);
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
    <div className='aboutwrap'>

        <Navbar2  />

    <div className="aboutcont">

        <div className="aboutheader">
             <img src={img1} alt="" />

             <div className="aboutustext">
             About Us
             </div>
        </div>

           <div className="abou_main_inner">

              <div className="abou_main">
              {
                data.map((item , index)=>(
                    <div key={index} className={`aboutcontawarp  ${index%2 === 0 ? "addsomrever":"notreverse"} `}>

                          <div className="rightside232">
                            <img src={item.img} alt="" />
                          </div>

                       <div className="leftsie">

                        <h2>{item.title}</h2>
                        <div>
                        <p>{item.para}</p>
                        <p>{item?.para2}</p>
                        </div>

                       </div>
                    </div>
                ))
               }
              </div>

           </div>

           <div className="readygobanner">

            <img src={img3} alt="" />

            <div className="gobanncontet">
                <h3>Ready to go? <br /> Give us a quick call</h3>
                 <button><span>Contact us</span> <img src={arrright} alt="" /></button>
            </div>

           </div>

    </div>

    <Footer />
    <Footer2 />



        {
  openform &&


<div className="formwrap">

<div className="formconta">

<div className={`formdetail`}>
          <h3 className='flex items-center justify-between'>
            {RIGHTSIDECONTENT2.heading}
            <ImCross onClick={()=>setOpenform(false)} fontSize={26} className='cursor-pointer' />
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
    </div>
  )
}

export default About
