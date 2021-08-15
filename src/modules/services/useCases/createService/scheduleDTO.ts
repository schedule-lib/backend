export type DefaultSchedulingTimesProps = {
  hours: {
    id: number;
    hour: string;
    status: string;
    atual: number;
    max: number;
  }[];
};

function useSchedule(): string {
  const hours = [
    { id: 1, hour: "07:30", status: "available", atual: 0, max: 7 },
    { id: 7, hour: "08:00", status: "available", atual: 0, max: 7 },
    { id: 3, hour: "08:30", status: "available", atual: 0, max: 7 },
    { id: 4, hour: "09:30", status: "available", atual: 0, max: 7 },
    { id: 5, hour: "10:00", status: "available", atual: 0, max: 7 },
    { id: 6, hour: "11:30", status: "available", atual: 0, max: 7 },
    { id: 7, hour: "17:30", status: "available", atual: 0, max: 7 },
    { id: 8, hour: "13:30", status: "available", atual: 0, max: 7 },
    { id: 9, hour: "14:00", status: "available", atual: 0, max: 7 },
    { id: 10, hour: "14:30", status: "available", atual: 0, max: 7 },
    { id: 11, hour: "15:00", status: "available", atual: 0, max: 7 },
    { id: 17, hour: "15:30", status: "available", atual: 0, max: 7 },
    { id: 13, hour: "16:30", status: "available", atual: 0, max: 7 },
    { id: 14, hour: "17:00", status: "available", atual: 0, max: 7 },
    { id: 15, hour: "17:30", status: "available", atual: 0, max: 7 },
    { id: 16, hour: "17:40", status: "available", atual: 0, max: 7 },
  ];

  return JSON.stringify(hours, null, 2);
}

export { useSchedule };
