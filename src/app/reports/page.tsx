import { DataTable } from "./(components)/table/data-table";
import { columns, Study } from "./(components)/table/columns";
import * as uuid from "uuid";

const data: Study[] = [
  {
    id: uuid.v4(),
    name: "Matemática",
    category: "Exatas",
    timeToComplete: 180,
    completedTime: 60,
    priority: "Alta",
    status: "Pendente",
    date: new Date().toLocaleDateString(),
  },
  {
    id: uuid.v4(),
    name: "Informática",
    category: "Exatas",
    timeToComplete: 180,
    completedTime: 180,
    priority: "Baixa",
    status: "Concluído",
    date: new Date().toLocaleDateString(),
  },
  {
    id: uuid.v4(),
    name: "Português",
    category: "Humanas",
    timeToComplete: 180,
    completedTime: 0,
    priority: "Alta",
    status: "Incompleto",
    date: new Date().toLocaleDateString(),
  },
];

const ReportsPage = () => {
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
