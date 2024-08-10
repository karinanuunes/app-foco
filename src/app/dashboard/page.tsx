"use client";

import { useEffect, useState } from "react";
import Menu from "@/components/ui/menu";
import CalendarBox from "./(components)/calendarCard";
import Pomodoro from "./(components)/pomodoro";
import CounterHoursBar from "./(components)/counterHoursBar";
import Tasks from "./(components)/tasks";
import DropdownProfile from "./(components)/dropdownProfile";
import DialogTask from "./(components)/dialogTask";
import Image from "next/image";
import StudySpreadsheet from "./(components)/studySpreadsheet";
import { Search } from "lucide-react";

interface IStudy {
  name: string;
  time: string;
  date: string;
}

export default function DashboardPage() {
  const [studies, setStudies] = useState<IStudy[]>([]);
  const [today, setToday] = useState<string>("");
  const [tasks, setTasks] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const getTasks = localStorage.getItem("tasks");
    const storagedTasks = getTasks ? JSON.parse(getTasks) : [];
    setTasks(storagedTasks);

    const getGoals = localStorage.getItem("goals");
    const storagedGoals = getGoals ? JSON.parse(getGoals) : [];
    setGoals(storagedGoals);

    const storedStudies = localStorage.getItem("studies");
    const studies = storedStudies ? JSON.parse(storedStudies) : [];
    setStudies(studies);

    const todayDate = new Date().toLocaleDateString();
    setToday(todayDate);
  }, []);

  if (!today) return null;

  const todayDate = new Date(today);
  const startOfWeek = new Date(todayDate);
  startOfWeek.setDate(todayDate.getDate() - todayDate.getDay());

  const endOfWeek = new Date(todayDate);
  endOfWeek.setDate(todayDate.getDate() + (6 - todayDate.getDay()));

  const countToday = studies
    .filter((study) => study.date === today)
    .reduce((acc, study) => acc + parseInt(study.time), 0);

  const countWeek = studies
    .filter((study) => {
      const studyDate = new Date(study.date);
      return studyDate >= startOfWeek || studyDate <= endOfWeek;
    })
    .reduce((acc, study) => acc + parseInt(study.time), 0);

  return (
    <div className="flex flex-1 p-12 gap-8 max-2xl:flex-col">
      <div className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col w-full h-fit p-6 bg-white rounded-3xl">
          <span className="text-2xl">
            Olá, <span className="font-medium text-2xl">Karina</span>!
          </span>
          <span className="text-gray-600">É bom te ver novamente.</span>
        </div>
        <div className="flex justify-center gap-12 max-lg:flex-col">
          <CounterHoursBar day minutes={countToday} />
          <CounterHoursBar week minutes={countWeek} />
        </div>
        <div className="flex justify-center gap-12 max-lg:flex-col">
          <div className="flex flex-col w-full h-full p-6 gap-3 bg-white rounded-3xl">
            <span className="text-2xl font-medium">Metas do mês</span>
            <Tasks tasks={goals} />
          </div>
          <div className="flex flex-col w-full h-full p-6 gap-3 bg-white rounded-3xl">
            <span className="text-2xl font-medium">Tarefas da semana</span>
            <Tasks tasks={tasks} />
          </div>
        </div>
        <StudySpreadsheet />
      </div>
      <div className="w-80 flex flex-col gap-6 max-2xl:w-full">
        <div className="flex gap-2">
          <div className="flex items-center bg-white rounded-xl px-4 max-2xl:w-full">
            <Search width={20} />
            <input type="text" className="outline-none p-2 w-52" />
          </div>
          <DropdownProfile />
        </div>
        <div className="flex justify-between items-center p-4 gap-3 bg-orange-800 text-white rounded-3xl">
          <span>Adicionar novo estudo</span>
          <DialogTask />
        </div>
        <Pomodoro />
        <CalendarBox />
      </div>
    </div>
  );
}
