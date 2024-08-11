import Link from "next/link";
import {
  Bolt,
  ChartNoAxesCombined,
  Clock,
  LayoutDashboard,
  LogOut,
  NotepadText,
  Pencil,
} from "lucide-react";

const Menu = () => {
  return (
    <div className="w-64 flex flex-col gap-12 py-12 bg-orange-800 mt-2 ml-2 rounded-t-3xl">
      <h1 className="font-extrabold text-3xl text-white pl-10">FOCO.</h1>
      <div className="flex flex-col flex-1">
        <nav className="flex flex-col">
          <Link
            href={"/dashboard"}
            className="text-sm font-medium text-white flex items-center gap-2 pl-6 py-3 mx-3 rounded-[64px] hover:bg-[#f9f9f9] hover:text-orange-800"
          >
            <LayoutDashboard />
            VISÃO GERAL
          </Link>
          <Link
            href={"/todolist"}
            className="text-sm font-medium text-white flex items-center gap-2 pl-6 py-3 mx-3 rounded-[64px] hover:bg-[#f9f9f9] hover:text-orange-800"
          >
            <Pencil />
            METAS & TAREFAS
          </Link>
          <Link
            href={"/"}
            className="text-sm font-medium text-white flex items-center gap-2 pl-6 py-3 mx-3 rounded-[64px] hover:bg-[#f9f9f9] hover:text-orange-800"
          >
            <NotepadText />
            PLANILHA
          </Link>
          <Link
            href={"/pomodoro"}
            className="text-sm font-medium text-white flex items-center gap-2 pl-6 py-3 mx-3 rounded-[64px] hover:bg-[#f9f9f9] hover:text-orange-800"
          >
            <Clock />
            POMODORO
          </Link>
          <Link
            href={"/"}
            className="text-sm font-medium text-white flex items-center gap-2 pl-6 py-3 mx-3 rounded-[64px] hover:bg-[#f9f9f9] hover:text-orange-800"
          >
            <ChartNoAxesCombined />
            RELATÓRIOS
          </Link>
          <Link
            href={"/"}
            className="text-sm font-medium text-white flex items-center gap-2 pl-6 py-3 mx-3 rounded-[64px] hover:bg-[#f9f9f9] hover:text-orange-800"
          >
            <Bolt />
            CONFIGURAÇÃO
          </Link>
        </nav>
        <Link
          href={"/"}
          className="text-sm font-medium text-white flex items-center justify-center gap-2 mt-auto"
        >
          <LogOut />
          SAIR
        </Link>
      </div>
    </div>
  );
};

export default Menu;
