import React, { useEffect, useState } from "react";
import "./Timer.css";

import FlipUnitContainer from "./Cards.js";
import Loader from "./Loader.js";

const INITIAL_STATE = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const calculateTimeLeft = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  let nextDate;

  if (currentMonth === 11) {
    nextDate = new Date(currentYear + 1, 0, 1);
  } else {
    nextDate = new Date(currentYear, currentMonth + 1, 1);
  }

  const difference = +nextDate - +today;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Timer() {
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(INITIAL_STATE);

  const [dayShuffle, setDayShuffle] = useState(true);
  const [hourShuffle, setHourShuffle] = useState(true);
  const [minuteShuffle, setMinuteShuffle] = useState(true);
  const [secondShuffle, setSecondShuffle] = useState(true);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();

      if (newTimeLeft.days !== timeLeft.days) {
        setDayShuffle((dayShuffle) => !dayShuffle);
      }
      if (newTimeLeft.hours !== timeLeft.hours) {
        setHourShuffle((hourShuffle) => !hourShuffle);
      }
      if (newTimeLeft.minutes !== timeLeft.minutes) {
        setMinuteShuffle((minuteShuffle) => !minuteShuffle);
      }
      if (newTimeLeft.seconds !== timeLeft.seconds) {
        setSecondShuffle((secondShuffle) => !secondShuffle);
      }
      setTimeLeft(calculateTimeLeft());

      if (loading) {
        setTimeout(setLoading(false), 2000);
      }
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [timeLeft, loading]);

  return (
    <>
      <div className={`timer ${loading ? "timer--hidden" : ""}`}>
        <FlipUnitContainer
          digit={timeLeft.days}
          unit="days"
          shuffle={dayShuffle}
        />
        <FlipUnitContainer
          digit={timeLeft.hours}
          unit="hours"
          shuffle={hourShuffle}
        />
        <FlipUnitContainer
          digit={timeLeft.minutes}
          unit="minutes"
          shuffle={minuteShuffle}
        />
        <FlipUnitContainer
          digit={timeLeft.seconds}
          unit="seconds"
          shuffle={secondShuffle}
        />
      </div>
      {loading && <Loader />}
    </>
  );
}
