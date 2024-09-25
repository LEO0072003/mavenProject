import React from 'react'
import "./common.css"
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import ins from "../assets/instagram.png";

function Footer2() {
  return (
    <div className="lastfocont">

   
    <div className="lastfooter">
    {/* left */}
    <p className='lasfop'>© 2024 Travel Tour All Rights Reserved.</p>

    <did className="lastfoteright">
      <span>Follow Us On</span>
      <div className="iconsleft">
        <a href="https://www.instagram.com/mavenandaman/"> <img  src={ins} alt="" /> </a>
       <a href="https://www.facebook.com/mavenandaman/"><img src={facebook} alt="" /> </a> 
        {/* <img src={facebook} alt="" /> */}
      </div>
    </did>
  </div>
  </div>
  )
}

export default Footer2