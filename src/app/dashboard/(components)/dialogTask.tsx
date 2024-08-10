"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

const DialogTask = () => {
  const [studyName, setStudyName] = useState("");
  const [studyTime, setStudyTime] = useState("");

  const createNewStudy = (studies: { name: string; time: string }[]) => {
    const getLocalStorage = localStorage.getItem("studies");
    const studiesLocalStorage = getLocalStorage
      ? JSON.parse(getLocalStorage)
      : [];

    localStorage.setItem(
      "studies",
      JSON.stringify([...studiesLocalStorage, ...studies])
    );
  };

  const handleStudies = (event: React.FormEvent) => {
    const studies = [];
    studies.push({
      name: studyName,
      time: studyTime,
      date: new Date().toLocaleDateString(),
    });

    createNewStudy(studies);
    setStudyName("");
    setStudyTime("");
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-white text-orange-800 p-2 rounded-2xl text-xl">
        <Plus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar novo estudo</DialogTitle>
          <DialogDescription>
            <form
              action=""
              className="flex flex-col mt-6 gap-3"
              onSubmit={handleStudies}
            >
              <input
                type="text"
                value={studyName}
                onChange={(e) => setStudyName(e.target.value)}
                placeholder="Nome do estudo"
                className="w-full p-2 rounded-xl outline-none text-base"
              />
              <input
                type="text"
                value={studyTime}
                onChange={(e) => setStudyTime(e.target.value)}
                placeholder="Tempo de estudo (em minutos)"
                className="w-full p-2 rounded-xl outline-none mt-4 text-base"
              />
              <button
                type="submit"
                className="bg-orange-800 text-white p-2 rounded-xl mt-4"
              >
                Adicionar
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogTask;
