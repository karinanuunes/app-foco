"use client";

import { useState } from "react";

interface TasksProps {
  tasks: string[];
}

const Tasks = ({ tasks }: TasksProps) => {
  const [selectedTaskIds, setSelectedTaskIds] = useState<number[]>([]);

  const handleUpdateTask = (id: number) => {
    setSelectedTaskIds((prevSelectedTaskIds) =>
      prevSelectedTaskIds.includes(id)
        ? prevSelectedTaskIds.filter((taskId) => taskId !== id)
        : [...prevSelectedTaskIds, id]
    );
  };

  return (
    <>
      {tasks.map((task, id) => (
        <div className="flex items-center gap-2" key={id}>
          <button
            className={`border border-orange-800 rounded-full w-4 h-4 ${
              selectedTaskIds.includes(id) ? "bg-orange-800" : ""
            }`}
            onClick={() => handleUpdateTask(id)}
          ></button>
          <span
            className={
              selectedTaskIds.includes(id) ? "line-through text-gray-400" : ""
            }
          >
            {task}
          </span>
        </div>
      ))}
    </>
  );
};

export default Tasks;
