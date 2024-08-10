"use client";

import { Plus } from "lucide-react";
import Tasks from "../dashboard/(components)/tasks";
import { useState } from "react";

const ToDoListPage = () => {
  const [task, setTask] = useState("");
  const getTasks = localStorage.getItem("tasks");
  const storagedTasks = getTasks ? JSON.parse(getTasks) : [];

  const [goal, setGoal] = useState("");
  const getGoals = localStorage.getItem("goals");
  const storagedGoals = getGoals ? JSON.parse(getGoals) : [];

  const tasks: string[] = [];
  const goals: string[] = [];

  const handleTask = () => {
    tasks.push(task);
    storageTasksLocal(tasks);
    setTask("");
  };

  const handleGoal = () => {
    goals.push(goal);
    storageGoalsLocal(goals);
    setGoal("");
  };

  const storageTasksLocal = (tasks: string[]) => {
    localStorage.setItem("tasks", JSON.stringify([...storagedTasks, ...tasks]));
  };

  const storageGoalsLocal = (goals: string[]) => {
    localStorage.setItem("goals", JSON.stringify([...storagedGoals, ...goals]));
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
        <Tasks tasks={storagedGoals} />
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
        <Tasks tasks={storagedTasks} />
      </div>
    </>
  );
};

export default ToDoListPage;
