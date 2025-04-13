import React, { useRef, useState } from 'react'
import { RIGHTSIDECONTENT2 } from '../Data/PackageDetail'
import emailjs from '@emailjs/browser';
import { ImCross } from "react-icons/im";
import toast from 'react-hot-toast';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from "react-phone-input-2";

function Email({setOpenform2}) {

  const form = useRef(null);

  const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState("");
  

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
   const toastId =  toast.loading("Loading...");

    const formData = new FormData(form.current);

    emailjs.sendForm("service_v2wateq", 'template_cj1kbsn', form.current, {
        publicKey: 'teMT0rnZ9JGkmP7O5',
    })
    .then(
        () => {
            console.log('SUCCESS!');
            toast.success("Successfully Sent");
            form.current.reset();
            setPhone("");

        },
        (error) => {
            console.log('FAILED...', error.text);
            toast.error("Something went wrong");
        }
    ).finally(()=>{
      setLoading(false);
      toast.dismiss(toastId);
      setOpenform2(false);
    })
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
  
                {/* <div className="dohalf">
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
                </div> */}

<PhoneInput
  country={'in'} 
  value={phone}
  onChange={setPhone}
  inputProps={{
    name: 'mobile',
    required: true,
    autoFocus: true
  }}
  inputClass="myphone" 

/>
  
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
  
                <button disabled={loading} className="requeeqebtn">
                  <span>REQUEST ENQUIRY</span>
                </button>
              </form>
            </div>
  
    </div>
  
  </div>
  
  )
}

export default Email