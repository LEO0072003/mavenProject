import React, { useState } from 'react';
import "./pdsec3.css";
import { POLICIES } from '../../Data/PackageDetail';


function PDSec5() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='pdsec5wwrap'>
      {POLICIES.map((item, index) => (
        <div key={index} className={`singlediv ${openIndex === index ? 'open' : ''}`}>
          <div className="headingdiv" onClick={() => toggleOpen(index)}>
            <p>{item.heading}</p>
          </div>

          {openIndex === index && (
            <ul className="pdsecdtalines">
              {item.li.map((listItem, liIndex) => (
                <li key={liIndex} className="singli">
                  • <span>{listItem}</span>
                </li>
              ))}
              <div className="viewgustdiv">View guest policy</div>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default PDSec5;
