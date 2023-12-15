"use client";
import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  const setCurrentTime = (newTime: string) => {
    setTime(newTime);
    setTimeout(setCurrentTime, 500, new Date().toLocaleTimeString());
  };
  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  });
  return <div id="clock">{time} </div>;
}
