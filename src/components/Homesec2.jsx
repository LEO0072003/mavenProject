import "./component.css";
import Home2swiper from "./Home2swiper";
import leftbtn from "../assets/leftbtns.png";
import rightbtn from "../assets/rightbtns.png";
import { useRef } from "react";
import { PACKAGE_DATA } from "../Data/Home";

function Homesec2() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="hse2wrap">
      <div className="hse2cont">

        <div className="hs2top">
          <div className="cantafort">
            <span>{PACKAGE_DATA.tag}</span>
          </div>
          <h2>
          {PACKAGE_DATA.heading}
          </h2>
        </div>

        <div className="swiper-container">
          <img src={leftbtn} alt="Previous" className="swiperbtns" onClick={handlePrev} />
          <Home2swiper ref={swiperRef} />
          <img src={rightbtn} alt="Next" className="swiperbtns" onClick={handleNext} />
        </div>

      </div>
    </div>
  );
}

export default Homesec2;
