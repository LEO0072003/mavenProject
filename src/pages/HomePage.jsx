import React, { useRef, useState } from 'react'
import Home from './Home'
import Homesec2 from "../components/Homesec2"
import Homesec3 from '../components/Homesec3'
import Homesec4 from './Homesec4'
import Homesec5 from '../components/Homesec5'
import ReadyGoBanner from '../components/ReadyGoBanner'
import WaterActivity from '../components/WaterActivity'
import FrequentQuestion from '../components/FrequentQuestion'
import Footer from '../Common/Footer'
import Footer2 from '../Common/Footer2'
import Testimonail from '../components/Testimonail'
import "./about.css"
import { RIGHTSIDECONTENT2 } from '../Data/PackageDetail'
import { ImCross } from "react-icons/im";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'


function HomePage() {
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
    <div>

       <Home setOpenform={setOpenform} />

   <Homesec2 />

   <Homesec3 setOpenform={setOpenform} />

   <Homesec4 />


<ReadyGoBanner setOpenform={setOpenform}  />

<Homesec5 />

<WaterActivity />

<Testimonail />

<FrequentQuestion />

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

export default HomePage
