"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarCard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col p-6 gap-3 bg-white rounded-3xl w-fit">
      <span className="text-2xl font-medium">Calendário</span>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default CalendarCard;
