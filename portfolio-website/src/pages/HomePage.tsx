// import { useEffect, useLayoutEffect, useState } from "react";
import "./HomePage.scss";
import Header from "../components/Header"
import Clock from "../components/Clock";
import { motion } from "framer-motion";

export default function HomePage() {

  return (
    <motion.div
      className="home container text-center"
      // initial={{ scale: 0.05, translateY: "70vh" }}
      // animate={{ scale: 1, translateY: "0vh" }}
      // exit={{ scale: 0.05, translateY: "70vh" }}
      // transition={{ duration: 0.5 }}
      initial={{ translateY: "100vh" }}
      animate={{ translateY: "0vh" }}
      exit={{ scale: 0.5, translateY: "70vh" }}
      transition={{ duration: 0.5 }}
    >
      <div className="info">
        <span className="name">LOK SZE CHUNG</span>
        <div className="time">
          <svg fill="none" viewBox="0 0 86 24">
            <path d="M7.237 23.5.5 16.764V7.237L7.237.5h71.526L85.5 7.237v9.527L78.763 23.5H7.237Z" stroke="#484B45"></path>
            <foreignObject x="10" y="2" width="66" height="20">
              <div xmlns="http://www.w3.org/1999/xhtml" className="live-time">
                <Clock />
              </div>
            </foreignObject>
          </svg>
        </div>
        
      </div>
      <div className="hero">
        <div className="hero-title-top">
          <Header heading={'full  —  stack'} />
        </div>
        <div className="hero-title-bottom">
          <Header heading={'developer'}/>
          <div className="intro">
            <p>
              <span className="hello">HELLO! </span>
              I am a Full Stack Software Engineer based in London, with an affinity for creating interactive and user-centric digital experiences. Let's build something remarkable together. 
            </p>
            <p>Get in touch</p>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

