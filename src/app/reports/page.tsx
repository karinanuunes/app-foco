"use client";

import { DataTable } from "./(components)/table/data-table";
import { columns, Study } from "./(components)/table/columns";
import { useEffect, useState } from "react";

export const handleEdit = (id: string) => {
  const studiesStorage = localStorage.getItem("studies");
  const studies = studiesStorage ? JSON.parse(studiesStorage) : [];

  studies.map((study: Study) => {
    const state = study.id === id ? "selected" : "not-selected";
    if (state === "selected") {
      console.log(`TESTE: Estudo ${study.name} editado com sucesso!`);
    }
  });
};

export const handleDelete = (id: string) => {
  const studiesStorage = localStorage.getItem("studies");
  const studies = studiesStorage ? JSON.parse(studiesStorage) : [];

  studies.map((study: Study) => {
    const state = study.id === id ? "selected" : "not-selected";
    if (state === "selected") {
      console.log(`TESTE: Estudo ${study.name} deletado com sucesso!`);
    }
  });
};

const ReportsPage = () => {
  const [data, setData] = useState<Study[]>([]);

  useEffect(() => {
    const studiesStorage = localStorage.getItem("studies");
    const studies = studiesStorage ? JSON.parse(studiesStorage) : [];
    setData(studies.reverse());

    if (!studiesStorage) localStorage.setItem("studies", JSON.stringify([]));
  }, []);

  return (
    <div className="flex flex-1 m-12 gap-8">
      <div className="flex flex-col gap-4 w-full h-full p-6 bg-white rounded-3xl">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-medium">Relatório de estudos</span>
          <span className="text-lg">
            Descubra tudo o que você já conquistou.
          </span>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default ReportsPage;
