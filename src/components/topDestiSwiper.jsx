import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules";
import smallTop from "../assets/topdesti1.png"
import { TOP_DESTINATIONS2 } from "../Data/Home";

const topDestiSwiper = () => {

  return (
    <Swiper
      rewind={true}
      modules={[Navigation]}
      className="mySwiper44"
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        1160: {
          slidesPerView: 2,
        },
        200: {
          slidesPerView: 1.15,
        },
      }}
    >
      {
        TOP_DESTINATIONS2.map((item , index)=>(
      <SwiperSlide key={index}>
        <div className="singleTopdesti">
             <img src={item.image} alt="" />
             <p className="destiname">{item.title}</p>
        </div>
      </SwiperSlide>

        ))
      }
    
    

    
    </Swiper>
  );
};

export default topDestiSwiper;
