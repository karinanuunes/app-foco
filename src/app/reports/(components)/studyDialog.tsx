"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import * as uuid from "uuid";

const StudyDialog = () => {
  const [studyName, setStudyName] = useState("");
  const [category, setCategory] = useState("");
  const [timeToComplete, setTimeToComplete] = useState(0);
  const [completedTime, setCompletedTime] = useState(0);
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const handleStudy = (event: React.FormEvent<HTMLFormElement>) => {
    const temporaryPriority = priority || "Baixa";
    const temporaryStatus = status || "Pendente";

    const study = {
      id: uuid.v4(),
      name: studyName,
      category,
      timeToComplete,
      completedTime,
      date: new Date().toLocaleDateString(),
      priority: temporaryPriority,
      status: temporaryStatus,
    };

    if (studyName.trim() === "") {
      event.preventDefault();
      alert("Nome da matéria é obrigatório!");
      return;
    }

    if (category.trim() === "") {
      event.preventDefault();
      alert("Categoria é obrigatória!");
      return;
    }

    if (timeToComplete == 0) {
      event.preventDefault();
      alert("O tempo esperado é obrigatório!");
      return;
    }

    const studiesStorage = localStorage.getItem("studies");
    const studiesParsed = studiesStorage ? JSON.parse(studiesStorage) : [];
    localStorage.setItem("studies", JSON.stringify([...studiesParsed, study]));

    setStudyName("");
    setCategory("");
    setTimeToComplete(0);
    setCompletedTime(0);
    setPriority("");
    setStatus("");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-orange-800 hover:bg-orange-900">
          Adicionar estudo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar estudo</DialogTitle>
          <DialogDescription>
            <form className="flex flex-col gap-2 mt-4" onSubmit={handleStudy}>
              <span className="text-base">Nome da matéria</span>
              <Input
                className="flex-1"
                value={studyName}
                onChange={(e) => setStudyName(e.target.value)}
              />
              <span className="text-base">Categoria</span>
              <Input
                className="flex-1"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <span className="text-base">Tempo esperado</span>
              <Input
                className="flex-1"
                type="number"
                value={timeToComplete}
                onChange={(e) => setTimeToComplete(Number(e.target.value))}
              />
              <span className="text-base">Tempo concluído</span>
              <Input
                className="flex-1"
                type="number"
                value={completedTime}
                onChange={(e) => setCompletedTime(Number(e.target.value))}
              />
              <span className="text-base">Prioridade</span>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Alta">Alta</SelectItem>
                  <SelectItem value="Média">Média</SelectItem>
                  <SelectItem value="Baixa">Baixa</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-base">Situação</span>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pendente">Pendente</SelectItem>
                  <SelectItem value="Concluído">Concluído</SelectItem>
                  <SelectItem value="Incompleto">Incompleto</SelectItem>
                </SelectContent>
              </Select>
              <Button
                className="bg-orange-800 hover:bg-orange-900 mt-4"
                type="submit"
              >
                Adicionar
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default StudyDialog;
