import React, { useEffect, useRef, useState } from 'react';
import "./home.css";
import Navbar2 from '../Common/Navbar2';
import PDSec1 from '../components/Packagedetail/PDSec1';
import PDSec2 from '../components/Packagedetail/PDSec2';
import PDSec3 from '../components/Packagedetail/PDSec3';
import PdSec1Animation from '../components/Packagedetail/PdSec1Animation';
import { useNavigate, useParams } from 'react-router-dom';
import { TOP_PACKAGES } from '../Data/Home';
import Homesec5 from '../components/Homesec5';
import { RIGHTSIDECONTENT2 } from '../Data/PackageDetail';
import { ImCross } from 'react-icons/im';
import emailjs from '@emailjs/browser';
import Footer from '../Common/Footer';
import Footer2 from '../Common/Footer2';


function PackageDetail() {
   const { id } = useParams();
   const navigate = useNavigate();

   const [packageView, setPackageView] = useState(null);
   const [openform , setOpenform ] = useState(false);


   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs
       .sendForm("service_smlm0mi", 'template_h5vec96', form.current, {
         publicKey: 'T46Q2vlyp0v8VpFSE',
       })
       .then(
         () => {
           console.log('SUCCESS!');
         },
         (error) => {
           console.log('FAILED...', error.text);
         },
       );
   };


   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

   useEffect(() => {

     const packageView = TOP_PACKAGES.find((pkg) => pkg.id === parseInt(id));

     if (!packageView) {
       navigate("/");
     } else {
       setPackageView(packageView);
     }
   }, [id, navigate]);



   const [isInView2, setIsInView2] = useState(true);
   const sectionRef2 = useRef(null);
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         setIsInView2(entry.isIntersecting);
       },
       {
         threshold: 0.1, // Change this value as needed
       }
     );
 
     if (sectionRef2.current) {
       observer.observe(sectionRef2.current);
     }
 
     return () => {
       if (sectionRef2.current) {
         observer.unobserve(sectionRef2.current);
       }
     };
   }, []);
 
   

   return (
     <section className='packageWrap'>
       <Navbar2 />

       <div className="pacakageWrapCont">
         <PDSec1 />

         <PdSec1Animation />

          <PDSec2 setOpenform={setOpenform}  packageView={packageView} isInView2={isInView2} />

         <PDSec3 packageView={packageView}  sectionRef2={sectionRef2} />

         <Homesec5 />


         {/* <PDSec5 /> */}
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


     </section>
   );
}

export default PackageDetail;
