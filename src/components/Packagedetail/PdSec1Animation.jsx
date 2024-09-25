import React, { useState, useEffect } from "react";
import "./pd.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

// Import your images
import a1 from "../../assets/a1.jpg";
import a2 from "../../assets/a2.jpg";
import a3 from "../../assets/a3.jpg";
import a4 from "../../assets/a4.jpg";
import a5 from "../../assets/a5.jpg";
import a6 from "../../assets/a6.jpg";

const randomChooseArray = [a1, a2, a3, a4, a5, a6];

// Function to shuffle an array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function PdSec1Animation() {
  // State to store shuffled images
  const [shuffledImages, setShuffledImages] = useState([]);

  // Use useEffect to shuffle images after the component mounts
  useEffect(() => {
    const shuffled = shuffleArray([...randomChooseArray]);
    setShuffledImages(shuffled);
  }, []);

  // If shuffledImages is empty, don't render the swiper yet
  if (shuffledImages.length === 0) return null;

  return (
    <div className="pdsec1aniwrap">
      <Swiper
        pagination={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {shuffledImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="singhersmalwidth">
              <img src={img} alt={`slide-${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PdSec1Animation;
