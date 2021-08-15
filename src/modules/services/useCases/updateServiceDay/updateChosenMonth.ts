interface IMonth {
  day: number;
  status: string;
  click: number;
}

type updateChosenMonthProps = {
  monthData: string;
  total_people: number;
  chosenDay: number;
};

function updateChosenMonth({
  monthData,
  chosenDay,
  total_people,
}: updateChosenMonthProps): string {
  const monthToUpdate = JSON.parse(monthData) as IMonth[];

  const monthUpdated = monthToUpdate.map((monthElement) => {
    if (monthElement.day === chosenDay) {
      // caso já foi agendado o máximo do dia
      if (
        monthElement.click >= total_people ||
        monthElement.status === "unavailable"
      ) {
        Object.assign(monthElement, {
          status: "unavailable",
        });
        return monthElement;
      }

      // caso resta horários disponíveis
      if (monthElement.click < total_people) {
        Object.assign(monthElement, {
          click: monthElement.click + 1,
        });

        // se for o único, marca como encerrado após o agendamento
        if (monthElement.click === total_people) {
          Object.assign(monthElement, {
            status: "unavailable",
          });
        }
      }
    }

    return monthElement;
  });

  return JSON.stringify(monthUpdated, null, 2);
}

export { updateChosenMonth };
