"use client";

import { Progress } from "@/components/ui/progress";
import { transformTime } from "@/utils/transformTime";
import { CirclePlay, CircleStop, PauseCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ClockProps {
  initialTime: number;
}

const Clock = ({ initialTime }: ClockProps) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTime(initialTime);
    setProgress(0);
  }, [initialTime]);

  useEffect(() => {
    if (isRunning) {
      const percentage = initialTime
        ? ((initialTime - time) / initialTime) * 100
        : 0;
      setProgress(percentage);
    }

    if (time === 0 && (initialTime == 1500 || initialTime == 3000)) {
      alert("Parabéns, você conseguiu!");
      setTime(initialTime);
    }

    if (time === 0 && (initialTime == 300 || initialTime == 600)) {
      alert("O descanso acabou, hora de voltar aos estudos!");
      setTime(initialTime);
    }
  }, [time, isRunning, initialTime]);

  const handlePlay = () => {
    if (isRunning) return;
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
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
    setTime(initialTime);
    setProgress(0);
  };

  return (
    <div className="flex flex-col gap-10 w-96">
      <span className="font-medium text-9xl">{transformTime(time)}</span>
      <div>
        <Progress
          value={progress}
          className={
            initialTime == 1500 || initialTime == 3000
              ? "bg-orange-800"
              : "bg-blue-800"
          }
        />
      </div>

      <div className="flex justify-center gap-6">
        {isRunning ? (
          <button onClick={handlePause}>
            <PauseCircle size={50} />
          </button>
        ) : (
          <button onClick={handlePlay}>
            <CirclePlay size={50} />
          </button>
        )}
        <button onClick={handleStop}>
          <CircleStop size={50} />
        </button>
      </div>
    </div>
  );
};

export default Clock;
