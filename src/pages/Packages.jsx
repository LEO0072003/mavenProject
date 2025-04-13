import React from "react";
import Navbar2 from "../Common/Navbar2";
import { discount, GSTCharge, serviceCharge, TOP_PACKAGES } from "../Data/AllPackages";
import icon from "../assets/icon.png";
import "./package.css";

function Packages() {
  return (
    <div>
      <Navbar2 />

      <div className="packagcont">
        {TOP_PACKAGES.map((item, index) => (
          <div key={index} className="singswipe2">
            <img src={item.img} alt="Background" className="swipbg" />

            <p className="bestsellertag">
              <span>Best seller</span>
            </p>

            <div className="titlenigh">
              <h3>{item.title}</h3>

              <div className="icondaygin">
                <img src={icon} alt="" /> <span>{item.dayNight}</span>
              </div>
            </div>

            <p className="suubtitle2">{item.subtitle} <p className='perperontext2'>₹{new Intl.NumberFormat().format(
                (Math.floor(
                
                    (item?.subtotal_to_cal +
                      Math.round(item?.subtotal_to_cal * serviceCharge) +
                      Math.round(item?.subtotal_to_cal * serviceCharge * GSTCharge)) /
                    item?.numberOfPeople
                
                )*discount).toFixed(0)
              )} <span>/person</span></p></p>


            <a href={`/packageDetail/${item.id}`} className="checkdbtns">
              {" "}
              <button className="checkdbtns">
                <span>CHECK DETAILS</span>
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
