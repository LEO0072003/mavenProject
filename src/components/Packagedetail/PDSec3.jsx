import { useState } from "react";
import "./pdsec3.css";
import { motion } from "framer-motion";


function PDSec3({ sectionRef2, packageView }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen); // Toggle open/close state
  };


  return (
    <div ref={sectionRef2} className="pdsec3wrap">
      <div className="pdsec3top">
        <p></p>
        <h3>End Of Trip</h3>
        <p></p>
      </div>

      <ul className="pdsec3secodiv2">
        <label className="toalcofd">
          <p>Total for the hotels on CP Plan</p>
          <span>{packageView?.hotelCP}</span>
        </label>

        <hr />

        <div className="ttiwrap">
          <h4>Transportation And Tickets </h4>

          {packageView?.transportTicket?.map((item, index) => (
            <label className="" key={index}>
              <p>{item?.title}</p>
              <span>{item?.price}</span>
            </label>
          ))}

          <label>
            <p>Total</p>
            <span>{packageView?.packageTotal}</span>
          </label>
        </div>


        <div className="ttiwrap2">
          <div onClick={toggleOpen} className="ttwratop">

      <h4  style={{ cursor: 'pointer' }}> Transportation And Tickets       </h4>
      <span className="ml-4">{packageView?.packageTotal}</span>
          </div>


      {packageView?.transportTicket?.map((item, index) => (
        <motion.div
          key={index}
          className={`packdetailInsidesec23`}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <label className="">
            <p>{item?.title}   <span>({item?.price})</span> </p>

          </label>

          <hr className="" />

          {item.para && <p className="aftetext">{item.para}</p>}

          <div className="pdsefistsec">
            <div className="alltranport">
              {item?.transport?.map((tra, index) => (
                <div key={index} className="tranpoorwrap">
                  <h4>{tra.trans}</h4>
                  <p>{tra.price}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}


    </div>


        <hr />

 <div className="bolabewraps">

        <label className="boldlabel">
          <p>Subtotal</p>
          <span>{packageView?.packageSubTotal}</span>
        </label>

        <label>
          <p>MavenAndaman Service Charge:</p>
          <span>{packageView?.serviceCharge}</span>
        </label>

        <label>
          <p>5% GST on service charge:</p>
          <span>{packageView?.GSTCharge}</span>
        </label>

        <label className="boldlabel">
          <p>Grand total:</p>
          <span>{packageView?.GrandTotal}</span>
        </label>

        </div>


      </ul>
    </div>
  );
}

export default PDSec3;
