import React from "react";
import "./blog.css";
import bigpg from "../assets/bigbg.png";
import smallbg from "../assets/smallbg.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
  {
    img: smallbg,
    date: "Feb 13, 2024- Development",
    para: "The evolution of design thinking in development",
  },
  {
    img: smallbg,
    date: "Feb 13, 2024- Development",
    para: "The evolution of design thinking in development",
  },
  {
    img: smallbg,
    date: "Feb 13, 2024- Development",
    para: "The evolution of design thinking in development",
  },
];

function BlogSection() {
  return (
    <div className="blogwrrap">
      <div className="blogcont">
        <motion.div
          className="bloggtop"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="blogtag">Our Blog</p>
          <h3>Articles & Resources</h3>
        </motion.div>

        <div className="articles">
          {/* left side  */}
          <motion.div
            className="articlleft"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={bigpg} alt="" />
            <span>Feb 13, 2024-Marketing Strategy</span>
            <p>
              Explore the transformative impact of artificial intelligence on
              modern marketing strategies.
            </p>
          </motion.div>

          <div className="articleright">
            {data.map((d, i) => (
              <motion.div
                key={i}
                className="singelblog"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <img src={d.img} alt="" />
                <div className="sinblogleft">
                  <p className="blodate">{d.date}</p>
                  <p className="blparap">{d.para}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.button
          className="viewallbtns"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span>View All Blogs</span> <FaArrowRight />
        </motion.button>
      </div>
    </div>
  );
}

export default BlogSection;
