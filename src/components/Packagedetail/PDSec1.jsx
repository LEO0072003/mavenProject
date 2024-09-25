import React, { useState, useEffect } from 'react';
import "./pd.css";
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

function PDSec1() {
  // State to store shuffled images
  const [shuffledImages, setShuffledImages] = useState([]);

  // Use useEffect to shuffle images after the component mounts
  useEffect(() => {
    // Shuffle and set the images after component mounts
    const shuffled = shuffleArray([...randomChooseArray]).slice(0, 5);
    setShuffledImages(shuffled);
  }, []);

  // If shuffledImages is empty (before useEffect runs), don't render the images
  if (shuffledImages.length === 0) return null;

  return (
    <div className='pdsec1cont'>
      {/* left side */}
      <img src={shuffledImages[0]} alt="d1" className='pdsec1d1' loading='lazy' />

      {/* right side */}
      <div className="pdsec1images">
        <img src={shuffledImages[1]} alt="d2" loading='lazy' />
        <img src={shuffledImages[2]} alt="d2" loading='lazy' />
        <img src={shuffledImages[3]} alt="d2" loading='lazy' />
        <img src={shuffledImages[4]} alt="d2" loading='lazy' />
      </div>
    </div>
  );
}

export default PDSec1;
