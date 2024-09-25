import React from 'react'
import upper from "../assets/upperimg.png"
import "./service.css"
import { FaArrowRight } from "react-icons/fa";

function ReadyGoBanner({setOpenform}) {
  return (
    <div className='readywrap'>

        <div className="readycont">

            <h3>Ready to go? <br /> Give us a quick call</h3>
            <button onClick={()=>setOpenform(true)}><span>Contact us</span> <FaArrowRight />    </button>

        <img src={upper} alt="upper" className='upperimg' />
        </div>


    </div>
  )
}

export default ReadyGoBanner