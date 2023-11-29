"use client";

import { useState, useEffect, useCallback } from "react";

const CountdownTimer = () => {
  const initialTargetTime = new Date();
  initialTargetTime.setHours(10, 47, 20);

  const [targetTime, setTargetTime] = useState(initialTargetTime);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    let difference = targetTime.getTime() - now.getTime();

    if (difference <= 0) {
      // If the target time is in the past, increment it by 24 hours
      setTargetTime(new Date(targetTime.getTime() + 24 * 60 * 60 * 1000));
      difference = targetTime.getTime() - now.getTime();
    }

    let timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  }, [targetTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="gradient-bg flex justify-around rounded-lg bg-transparent/10 p-2 text-2xl font-bold sm:text-4xl">
      <span>{`${formatNumber(timeLeft.hours)}:${formatNumber(
        timeLeft.minutes,
      )}:${formatNumber(timeLeft.seconds)}`}</span>
    </div>
  );
};

export default CountdownTimer;
