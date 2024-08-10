"use client";

const StudySpreadsheet = () => {
  const storedStudies = localStorage.getItem("studies");
  const studyList = storedStudies ? JSON.parse(storedStudies) : [];

  return (
    <div className="flex flex-col h-fit p-6 gap-4 bg-white rounded-3xl">
      <span className="font-medium text-lg">Planilha de estudo</span>
      <div className="flex flex-col gap-4">
        {studyList.length > 0 ? (
          studyList.map((study: { name: string; time: string }, id: number) => (
            <div className="flex justify-between" key={id}>
              <span className="font-medium">{study.name}</span>
              <span>{study.time} minutos</span>
            </div>
          ))
        ) : (
          <span>Nenhum estudo encontrado.</span>
        )}
      </div>
    </div>
  );
};

export default StudySpreadsheet;
