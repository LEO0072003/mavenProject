import React from 'react'
import { RIGHTSIDECONTENT2 } from '../Data/PackageDetail'
import emailjs from '@emailjs/browser';
import { ImCross } from "react-icons/im";
import toast from 'react-hot-toast';


function Email({setOpenform2 , form}) {

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
                  <input type="text" name='from_name' required />
                </label>
  
                <label>
                  <p>
                    Email <span>*</span>
                  </p>
                  <input type="email" name='from_email' required />
                </label>
  
                <label>
                  <p>
                    Number Of Travellers <span>*</span>
                  </p>
                  <input type="number" name='nb_trav' required />
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
                      name='mobile'
                      required
                  />
                </div>
  
                <div className="dohalf">
                  <input
                    type="text"
                    placeholder="Travel Date*"
                    className="Traveldate"
                    name='dates'
                    required
                  />
                  <input
                    type="text"
                    placeholder="Duration*"
                    className="Duration"
                    name='dur'
                    required
                  />
                </div>
  
                <textarea
                  className="textaremesge"
                  name="message"
                  id=""
                  placeholder="Message..."
                  required
  
                ></textarea>
  
                <button className="requeeqebtn">
                  <span>REQUEST ENQUIRY</span>
                </button>
              </form>
            </div>
  
    </div>
  
  </div>
  
  )
}

export default Email