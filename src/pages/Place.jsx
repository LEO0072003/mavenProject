import Navbar2 from "../Common/Navbar2";
import "./place.css";
import { TOP_PLACES } from "../Data/Place";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";


function Place() {
  const [showpopup, setshowpopup] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (showpopup) {
      setTimeout(() => setAnimationClass("zoom-in"), 10);
    } else {
      setAnimationClass(""); 
    }
  }, [showpopup]);

  return (
    <div className="placwrap">
      <Navbar2 />

      <div className="allcontainer">
        <div className="allplacesCon">
          {TOP_PLACES.map((item, index) => (
            <div onClick={() => setshowpopup(item)} key={index} className="sindesit">
              <img src={item.image} alt="" />
              <div className="sdecont">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {showpopup && (
          <div className={`popupwrap ${animationClass}`}>
            <div className={`popcont ${animationClass}`}>

              <nav>
                <RxCross2 onClick={() => setshowpopup(false)} className="crroimg" />
              </nav>

                <div className="contimages">

                     <div className="imagesplace">
                        <img src={showpopup.image} alt="" />
                     </div>

                     <div className="placcontent">
                     {showpopup.content}
                   
                     </div>

                </div>
           

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Place;
