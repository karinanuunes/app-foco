"use client";

import { CirclePlay, CircleStop, PauseCircle } from "lucide-react";
import { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const transformTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePlay = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handlePause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col p-6 gap-1 bg-white rounded-3xl">
      <span className="text-2xl font-medium">Cronômetro</span>
      <div className="flex items-center justify-between">
        <span className="font-medium text-4xl text-center">
          {transformTime(time)}
        </span>
        <div className="flex justify-center gap-6">
          {time === 0 ? (
            <button onClick={handlePlay}>
              <CirclePlay />
            </button>
          ) : isRunning ? (
            <button onClick={handlePause}>
              <PauseCircle />
            </button>
          ) : (
            <button onClick={handlePlay}>
              <CirclePlay />
            </button>
          )}

          <button onClick={handleStop}>
            <CircleStop />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
