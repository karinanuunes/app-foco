interface CounterHoursAndMinutesProps {
  day?: boolean;
  week?: boolean;
  minutes: number;
}

const CounterHoursBar = ({
  day,
  week,
  minutes,
}: CounterHoursAndMinutesProps) => {
  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return (
    <div className="flex items-center justify-between w-full h-fit p-6 bg-white rounded-3xl">
      <span className="text-lg">{day ? "Hoje" : "Semana"}</span>
      <span className="font-medium text-xl">
        {minutes > 0
          ? `${
              hours > 0 ? `${hours} hora${hours > 1 ? "s" : ""} e` : ""
            } ${minutes} minuto${minutes > 1 ? "s" : ""}`
          : "Comece a estudar!"}
      </span>
    </div>
  );
};

export default CounterHoursBar;
