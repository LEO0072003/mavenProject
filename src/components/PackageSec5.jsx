import React, { useRef } from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules";
import left from "../assets/leftbtns.png";
import right from "../assets/rightbtns.png";
import clock from "../assets/clock.png";
import { TOP_PACKAGES } from "../Data/AllPackages";
import { useNavigate } from "react-router-dom";

function PackageSec5() {
  const swiperRef = useRef(null); // Create a reference for the Swiper instance

  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="hsec5wrap">
      <div className="hsec5cont">
        <h2>{TOP_PACKAGES.heading}</h2>

        <div className="brwseritems">
          <img src={left} alt="left" onClick={handlePrevClick} className="bwseritembtn" style={{ cursor: 'pointer' }} />

          <Swiper
            rewind={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper2"
            slidesPerView={3}
            spaceBetween={10}
            ref={swiperRef} // Attach the ref to Swiper
            breakpoints={{
              1250: {
                slidesPerView: 3, // Show 2 slides per view for screen widths of 1660px and above
              },
              850:{
                slidesPerView:2
              } ,
              200:{
                slidesPerView:1
              }
            }}
          >
            {
              TOP_PACKAGES.map((item ,index)=>(
                <SwiperSlide>
                <div key={index} className="sec5Item">
                  <img src={item.img} alt="img" className="sec5img" />
  
                  <div className="s5conteent">
                    <div className="s5itemclock">
                      <img src={clock} alt="" />
                      <span>{item.dayNight}</span>
                    </div>
  
                    <p className="s5imepara">
                     {item.title}
                    </p>
  
                  </div>
  
                  <button  className="checkdetabtns1">
                    <span>CHECK DETAILS</span>
                  </button>
                </div>
              </SwiperSlide>
              ))
            }
         
          </Swiper>

          <img src={right} alt="right" onClick={handleNextClick} className="bwseritembtn" style={{ cursor: 'pointer' }} />

        </div>
      </div>
    </div>
  );
}

export default PackageSec5;
