"use client";

import { Plus } from "lucide-react";
import Tasks from "../dashboard/(components)/tasks";
import { useEffect, useState } from "react";

const ToDoListPage = () => {
  const [task, setTask] = useState("");
  const [goal, setGoal] = useState("");
  const [storedTasks, setStoredTasks] = useState<string[]>([]);
  const [storedGoals, setStoredGoals] = useState<string[]>([]);

  useEffect(() => {
    const getTasks = localStorage.getItem("tasks");
    const storagedTasks = getTasks ? JSON.parse(getTasks) : [];
    setStoredTasks(storagedTasks);

    const getGoals = localStorage.getItem("goals");
    const storagedGoals = getGoals ? JSON.parse(getGoals) : [];
    setStoredGoals(storagedGoals);
  }, []);

  const handleTask = () => {
    if (task.trim()) {
      const updatedTasks = [...storedTasks, task];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setStoredTasks(updatedTasks);
      setTask("");
    }
  };

  const handleGoal = () => {
    if (goal.trim()) {
      const updatedGoals = [...storedGoals, goal];
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      setStoredGoals(updatedGoals);
      setGoal("");
    }
  };

  return (
    <>
      <div className="flex flex-col flex-1 m-12 p-6 gap-8 w-full h-fit bg-white rounded-3xl">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-medium">Metas do mês</h1>
          <div className="flex gap-4">
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Adicionar nova meta"
              className="w-full h-12 p-4 border border-orange-800 rounded-xl outline-none"
            />
            <button
              className="bg-orange-800 text-white p-3 rounded-2xl text-xl"
              onClick={handleGoal}
              onDragEnter={handleGoal}
            >
              <Plus />
            </button>
          </div>
        </div>
        <Tasks tasks={storedGoals} />
      </div>
      <div className="flex flex-col flex-1 mt-12 p-6 gap-8 w-full h-fit bg-white rounded-3xl">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-medium">Tarefas da semana</h1>
          <div className="flex gap-4">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Adicionar nova meta"
              className="w-full h-12 p-4 border border-orange-800 rounded-xl outline-none"
            />
            <button
              className="bg-orange-800 text-white p-3 rounded-2xl text-xl"
              onClick={handleTask}
              onDragEnter={handleTask}
            >
              <Plus />
            </button>
          </div>
        </div>
        <Tasks tasks={storedTasks} />
      </div>
    </>
  );
};

export default ToDoListPage;
