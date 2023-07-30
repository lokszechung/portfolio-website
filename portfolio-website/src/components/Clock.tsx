import { useLayoutEffect, useState } from "react";
import "./Clock.scss";


function GetTime() {

  const [hours, setHours] = useState<string>('-')
  const [minutes, setMinutes] = useState<string>('-')

  useLayoutEffect(() => {
    setInterval(() => {

      const datetime = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });

      const time = datetime.split(", ")[1]
      const timeArray = time.split(":")
      setHours(("0" + timeArray[0]).slice(-2));
      setMinutes(("0" + timeArray[1]).slice(-2));

    }, 1000)
  }, [])
  
  return (  
    {hours, minutes}
  )
}

export default function Clock() {

  const [timezone, setTimezone] = useState<string>('')
  
  const myTime = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });
  const utc = new Date().toLocaleString()

  useLayoutEffect(() => {
    utc === myTime ? setTimezone('GMT') : setTimezone('BST');
  }, [utc, myTime])

  const {hours, minutes} = GetTime()

  return (
    <>
      <span className="hour">{hours}</span>
      <span className="separator">:</span>
      <span className="minute">{minutes}</span>
      <span className="zone">&nbsp;{timezone}</span>
    </>
  )
  
}