import { useEffect, useState } from "react";


type ReturnDateType={
  days:string;
  hours:string;
  minutes:string;
  seconds:string;
};
export function useCountdownDate(date:Date): ReturnDateType {
  console.log(date)
  const [countdown, setcountdown] = useState({
    days:'00',
    hours:'00',
    minutes:'00',
    seconds:'00',
  })
  
  useEffect(() => {
    const interval = setInterval(() => setNewTime(),1000);
    return () => clearInterval(interval);
  }, [])

  const setNewTime = () => {
    const startTime = date;
    console.log(date)
    const endTime = new Date();
    console.log(endTime)
    const distanceToNow = startTime.valueOf() - endTime.valueOf();
    console.log(endTime.valueOf())
    console.log(distanceToNow)
    const getDays = Math.floor(distanceToNow/(1000*60*60*24));
    const getHours = `0${Math.floor((distanceToNow%(1000*60*60*24))/(1000*60*60))}`.slice(-2);
    const getMinutes = `0${Math.floor((distanceToNow%(1000*60*60))/(1000*60))}`.slice(-2);
    const getSeconds = `0${Math.floor((distanceToNow%(1000*60))/(1000))}`.slice(-2);
    setcountdown({
      days:getDays.toString()||'000',
      hours:getHours||'000',
      minutes:getMinutes||'000',
      seconds:getSeconds||'000',
    })
  };

  return {
    days: countdown.days,
    hours: countdown.hours,
    minutes: countdown.minutes,
    seconds: countdown.seconds,
  }

}