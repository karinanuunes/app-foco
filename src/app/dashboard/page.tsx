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

interface IStudy {
  name: string;
  time: string;
  date: string;
}

export default function DashboardPage() {
  const [studyList, setStudyList] = useState<IStudy[]>([]);
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    const storedStudies = localStorage.getItem("studies");
    const studyList = storedStudies ? JSON.parse(storedStudies) : [];
    setStudyList(studyList);

    const todayDate = new Date().toLocaleDateString();
    setToday(todayDate);
  }, []);

  if (!today) return null;

  const todayDate = new Date(today);
  const startOfWeek = new Date(todayDate);
  startOfWeek.setDate(todayDate.getDate() - todayDate.getDay());

  const endOfWeek = new Date(todayDate);
  endOfWeek.setDate(todayDate.getDate() + (6 - todayDate.getDay()));

  const countToday = studyList
    .filter((study) => study.date === today)
    .reduce((acc, study) => acc + parseInt(study.time), 0);

  const countWeek = studyList
    .filter((study) => {
      const studyDate = new Date(study.date);
      return studyDate >= startOfWeek || studyDate <= endOfWeek;
    })
    .reduce((acc, study) => acc + parseInt(study.time), 0);

  return (
    <main className="flex bg-[#f9f9f9]">
      <Menu />
      <div className="flex flex-col flex-1 p-12 gap-8">
        <div className="flex flex-col w-full h-fit p-6 bg-white rounded-3xl">
          <span className="text-2xl">
            Olá, <span className="font-medium text-2xl">Karina</span>!
          </span>
          <span className="text-gray-600">É bom te ver novamente.</span>
        </div>
        <div className="flex justify-center gap-12">
          <CounterHoursBar day minutes={countToday} />
          <CounterHoursBar week minutes={countWeek} />
        </div>
        <div className="flex justify-center gap-12">
          <Tasks
            taskName="Metas do mês"
            tasks={[
              "Ler Código Limpo",
              "Terminar Fundamentos de Engenharia de Software",
              "Repassar matéria de Design de Interação",
              "Ler Código Limpo",
            ]}
          />
          <Tasks
            taskName="Tarefas da semana"
            tasks={["Entregar Aplicativo Foco", "Decidir projeto da faculdade"]}
          />
        </div>
        <StudySpreadsheet />
      </div>
      <div className="w-80 h-fit mt-12 mr-12 flex flex-col gap-6">
        <div className="flex gap-2">
          <div className="flex bg-white rounded-xl px-4">
            <Image src="/search.svg" alt="Procura" width={20} height={20} />
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
    </main>
  );
}
