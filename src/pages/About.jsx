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
        title:"Travel the world one place at a time" , 
        para:"ManvenAndaman, a leading travel agency in the mesmerizing islands of Andaman, was founded by the passionate couple Prashant Ullal and Anita Singh. With a remarkable experience of 10 years in the industry, we dedicate ourselves to providing you with an unforgettable travel experience. We specialize in creating individualized itineraries that appeal to your particular interests and tastes, from immaculate beaches to beautiful coral reefs. With our extensive local knowledge and attention to detail, you can be sure that your trip to Andaman will be perfectly organized, enabling you to create lifelong memories.."
    }  , 
    {
       img: a2 , 
        title:"We are a team of Experts" , 
        para:"Our travel specialists are committed to creating the ideal itinerary for every tourist, drawing on years of experience and in-depth knowledge of the Andaman Islands. We handle every aspect of your trip, from picking the ideal lodging to planning thrilling activities and transportation. " , 
        para2:"From the moment you contact us, We will work closely with you to develop a custom itinerary that meets your needs by getting to know your interests and preferences. We take pride in our expertise, attention to detail, and dedication to going above and beyond for our clients."
    }  , 
    {
      img: a3 , 
        title:"Our Mission" , 
        para:"To provide exceptional travel services and custom itineraries that satisfy each traveler’s interests and needs. We work hard to provide seamless planning, knowledgeable direction, and outstanding customer service, assuring a trouble-free experience from start to finish."
    }  , 
]


function About() {

  const [openform , setOpenform ] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    //  const toastId = toast.loading("Loading...");
     e.preventDefault();
     
     emailjs
     .sendForm("service_v2wateq", 'template_cj1kbsn', form.current, {
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
      // toast.dismiss(toastId);
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