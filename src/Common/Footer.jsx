import React from "react";
import "./common.css";
import { Link } from "react-router-dom";


function Footer() {


  const phoneNumber = '917695041144'; // Replace with the phone number

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footerwrap">
      <div className="footecont">

        <div className="footercdetails">

          {/* frist section */}
          <div className="fotsec2">

            <label>
              <h3>Call Us</h3>
              <p>+91 7695041144</p>
            </label>

            <label>
              <h3>Email</h3>
              <p>mavenandaman@gmail.com</p>
            </label>
          </div>

          <div className="fotsec1">
            <label>
              <h3>About Us</h3>
             <Link to={"/about"}> <p>Our Story</p> </Link>
             {/* <Link to={"/about"}> <p>Travel Blogs & tips</p> </Link>
             <Link to={"/about"}>  <p>Working with Us</p> </Link>
             <Link to={"/about"}> <p>Be Our Partner</p> </Link> */}
            </label>
          </div>

          <div className="fotsec1">
            <label>
              <h3>Social Media</h3>
              <a href="https://www.instagram.com/mavenandaman/"><p>Instagram</p> </a>
             <a href="https://www.facebook.com/mavenandaman/"> <p>Facebook</p> </a>
             <a href="#" onClick={handleClick}>  <p>WhatsApp</p></a>
            </label>
          </div>

          {/* <div className="fotsec1">
            <label>
              <h3>Pay Safely With Us</h3>
              <p className="adwidth">
                The payment is encrypted and transmitted securely with an SSL
                protocol.
              </p>
            </label>
          </div> */}

        </div>


      </div>
    </footer>
  );
}

export default Footer;
