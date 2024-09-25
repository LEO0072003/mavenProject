import React, { useState } from "react";
import redicon from "../assets/read icon.png";
import redicon1 from "../assets/read icon (1).png";
import "./service.css";
import { FREQUENT_QUESTIONS } from "../Data/Home";

function FrequentQuestion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="freqwrap">
      <div className="freqcont">
        <div className="frqtop">
          <h2>Frequently Asked Questions</h2>
          <p>We're happy to answer your questions</p>
        </div>

        <div className="questions">
          {FREQUENT_QUESTIONS.map((d, i) => (
            <div key={i} className="singques">
              <div className="queitonaprt" onClick={() => toggleAnswer(i)}>
                <p>{d.ques}</p>
                <img
                  src={activeIndex === i ? redicon1 : redicon}
                  alt="Toggle Icon"
                />
              </div>

              <div
                className={`anspart ${activeIndex === i ? "active" : ""}`}
              >
                <p>{d.ans}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <button className="loadmorebtn"><span>Load more FAQs</span></button> */}
      </div>
    </div>
  );
}

export default FrequentQuestion;



