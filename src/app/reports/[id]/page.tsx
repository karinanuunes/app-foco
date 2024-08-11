interface ReportPageProps {
  params: {
    id: string;
  };
}

const ReportPage = ({ params: { id } }: ReportPageProps) => {
  return (
    <div className="flex flex-1 m-12 gap-8">
      <div className="flex flex-col gap-4 w-full h-full p-6 bg-white rounded-3xl">
        <span className="text-2xl font-medium">Relatório de estudo {id}</span>
      </div>
    </div>
  );
};

export default ReportPage;
