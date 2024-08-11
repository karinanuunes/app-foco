"use client";

import { useState } from "react";
import Clock from "./(components)/clock";

const PomodoroPage = () => {
  const [time, setTime] = useState(1500);

  return (
    <div className="flex flex-1 m-12 gap-8">
      <div className="flex flex-col w-full h-full p-6 bg-white rounded-3xl">
        <span className="text-2xl font-medium">Pomodoro</span>
        <div className="flex gap-4 mx-auto my-4 max-lg:flex-col">
          <div className="flex gap-4 m-auto">
            <button
              className="w-36 h-8 border-b-4 font-medium hover:border-b-4 hover:border-orange-800"
              onClick={() => setTime(1500)}
            >
              25 minutos
            </button>
            <button
              className="w-36 h-8 border-b-4 font-medium hover:border-b-4 hover:border-orange-800"
              onClick={() => setTime(3000)}
            >
              50 minutos
            </button>
          </div>
          <div className="flex gap-4 m-auto">
            <button
              className="w-36 h-8 border-b-4 font-medium hover:border-b-4 hover:border-blue-800"
              onClick={() => setTime(300)}
            >
              5 minutos
            </button>
            <button
              className="w-36 h-8 border-b-4 font-medium hover:border-b-4 hover:border-blue-800"
              onClick={() => setTime(600)}
            >
              10 minutos
            </button>
          </div>
        </div>
        <div className="text-center m-auto">
          <Clock initialTime={time} />
        </div>
      </div>
    </div>
  );
};

export default PomodoroPage;
