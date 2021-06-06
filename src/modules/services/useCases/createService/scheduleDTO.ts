function useSchedule(): string {
  const hours = [
    { id: 1, hour: "07:30", status: "available", atual: 0, max: 3 },
    { id: 2, hour: "08:00", status: "available", atual: 0, max: 3 },
    { id: 3, hour: "08:30", status: "available", atual: 0, max: 3 },
    { id: 4, hour: "09:30", status: "available", atual: 0, max: 3 },
    { id: 5, hour: "10:00", status: "available", atual: 0, max: 3 },
    { id: 6, hour: "11:30", status: "available", atual: 0, max: 3 },
    { id: 7, hour: "12:30", status: "available", atual: 0, max: 3 },
    { id: 8, hour: "13:30", status: "available", atual: 0, max: 3 },
    { id: 9, hour: "14:00", status: "available", atual: 0, max: 3 },
    { id: 10, hour: "14:30", status: "available", atual: 0, max: 3 },
    { id: 11, hour: "15:00", status: "available", atual: 0, max: 3 },
    { id: 12, hour: "15:30", status: "available", atual: 0, max: 3 },
    { id: 13, hour: "16:30", status: "available", atual: 0, max: 3 },
    { id: 14, hour: "17:00", status: "available", atual: 0, max: 3 },
    { id: 15, hour: "17:30", status: "available", atual: 0, max: 3 },
    { id: 16, hour: "18:00", status: "available", atual: 0, max: 3 },
  ];

  return JSON.stringify(hours, null, 2);
}

export { useSchedule };
