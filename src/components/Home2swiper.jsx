import { Swiper, SwiperSlide } from 'swiper/react';
import icon from "../assets/clock.png";
import "./component.css"
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation  , Autoplay , Pagination  } from 'swiper/modules';
import {  TOP_PACKAGES } from '../Data/Home';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const Home2swiper = forwardRef((props, ref) => {
  const swiperRef = useRef(null);

  useImperativeHandle(ref, () => ({
    swiper: swiperRef.current.swiper,
  }));

  return (
    <Swiper
      rewind={true}
      modules={[Navigation, Autoplay , Pagination]}
      className="mySwiper"
      slidesPerView={2}
      spaceBetween={20}
      ref={swiperRef}
      loop={true} 
      autoplay={{ delay: 2000 }}

      breakpoints={{
        1160: {
          slidesPerView: 2, 
          pagination:true ,
        },
        200:{
          slidesPerView:1.15  , 
        
        }
      }}
    >

      {
        TOP_PACKAGES.map((item , index)=>(
          <SwiperSlide key={index}>

          <div className="singswipe">

            <img src={item.img} alt="Background" className="swipbg" />

            <p className="bestsellertag">
              <span>Best seller</span>
            </p>

            <div className="swimidCont">
              <div className="swmidcleft">
                <h3>{item.title}</h3>
              </div>
              <p>
                <img src={icon} alt="Icon" /> <span className='daynighspan'>{item.dayNight}</span>
              </p>
            </div>

  <div className="eahpersonwap">
             <p className="suubtitle">{item.subtitle} </p>
             <p className='perperontext'>₹{Math.floor(item?.GrandTotal/item?.numberOfPeople)} <span>/- Each Person</span></p>
  </div>


            <a href={`/packageDetail/${item.id}`} className="checkdbtns"> <button  className="checkdbtns">
              <span>CHECK DETAILS</span>
            </button>

            </a>
  
          </div>

        </SwiperSlide>
        ))
      }
    
    </Swiper>
  );
});

export default Home2swiper;
