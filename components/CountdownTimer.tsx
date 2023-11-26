"use client";

import React, { useState, useEffect, useCallback } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const initialTargetTime = new Date();
  initialTargetTime.setHours(10, 47, 20);

  const [targetTime, setTargetTime] = useState(initialTargetTime);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = new Date();
    let difference = targetTime.getTime() - now.getTime();

    if (difference <= 0) {
      // If the target time is in the past, increment it by 24 hours
      setTargetTime(new Date(targetTime.getTime() + 24 * 60 * 60 * 1000));
      difference = targetTime.getTime() - now.getTime();
    }

    let timeLeft: TimeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  }, [targetTime]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex justify-around text-2xl sm:text-4xl font-bold rounded-lg bg-transparent/10 p-2 gradient-bg">
      <span>{`${formatNumber(timeLeft.hours)}:${formatNumber(
        timeLeft.minutes
      )}:${formatNumber(timeLeft.seconds)}`}</span>
    </div>
  );
};

export default CountdownTimer;
