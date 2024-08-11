"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const CustomDialog = () => {
  const [customTime, setCustomTime] = useState("");

  const handleCustomTime = () => {
    const transformTime = parseInt(customTime) * 60;
    const transformTimeToString = transformTime.toString();

    localStorage.setItem("customTime", JSON.parse(transformTimeToString));
  };

  useEffect(() => {}, [customTime]);

  return (
    <Dialog>
      <DialogTrigger>Personalize</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Personalize o tempo do seu jeito</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col mt-6 gap-3">
              <form onSubmit={handleCustomTime}>
                <input
                  type="number"
                  value={customTime}
                  onChange={(e) => setCustomTime(e.target.value)}
                  placeholder="Digite o tempo em minutos"
                  className="w-full p-2 rounded-xl outline-none text-base"
                />
                <button
                  type="submit"
                  className="bg-orange-800 text-white p-2 rounded-xl mt-4"
                >
                  Personalizar
                </button>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
