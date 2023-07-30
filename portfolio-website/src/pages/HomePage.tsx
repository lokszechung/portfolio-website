// import { useEffect, useLayoutEffect, useState } from "react";
import "./Homepage.scss";
import Header from "../components/Header"
import Clock from "../components/Clock";

export default function Homepage() {

  // const [timezone, setTimezone] = useState<string>('')
  // // const [time, setTime] = useState('')
  // const [hr, setHr] = useState(new Date().getHours())
  // const [min, setMin] = useState(new Date().getMinutes())
  // const [sec] = useState(new Date().getSeconds())

  // const [hour, setHour] = useState<number | string>(hr)
  // const [minute, setMinute] = useState<number | string>(min)

  // const [useFullMinute, setUseFullMinute] = useState(false)

  // const newdate = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });
  // const utc = new Date().toLocaleString()
  // const timer = 60 - sec

  // if (timer !== 0) {
  //   setTimeout(() => {
  //     setUseFullMinute(true)
  //     setMinute(((min + 1) >= 0 && (min + 1 ) < 10) ? `0${min + 1}` : min + 1 )
  //   }, timer)
  // }

  // useLayoutEffect(() => {
  //   utc === newdate ? setTimezone('GMT') : setTimezone('BST');

  //   if(hr >= 0 && hr < 10 ) {
  //     setHour(`0${hr}`)
  //   }
  //   if(min >= 0 && min < 10 ) {
  //     setMinute(`0${min}`)
  //   }

  //   if (timezone === 'BST') {
  //     if (hr === 0) {
  //       setHr(23)
  //     } else {
  //       setHr(hr - 1)
  //     }
  //   }

  // }, [utc, newdate, timezone])

  // console.log(hr, min, sec)
  // console.log(hour, minute)

  return (
    <>
      <div className="info">
        <span className="name">LOK SZE CHUNG</span>
        <div className="time">
          <svg fill="none" viewBox="0 0 86 24">
            <path d="M7.237 23.5.5 16.764V7.237L7.237.5h71.526L85.5 7.237v9.527L78.763 23.5H7.237Z" stroke="#484B45"></path>
            <foreignObject x="10" y="2" width="66" height="20">
              <div xmlns="http://www.w3.org/1999/xhtml" className="live-time">
                {/* <span className="hour">{hour}</span>
                <span className="seperator">:</span>
                <span className="minute">{minute}</span>
                <span className="zone">&nbsp;{timezone}</span> */}
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
      
      <div className="nav">
      </div>
    </>
  );
}

