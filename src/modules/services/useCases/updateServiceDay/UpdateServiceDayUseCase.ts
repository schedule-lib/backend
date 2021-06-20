import { inject, injectable } from "tsyringe";

import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

import { AppError } from "../../../../errors/AppError";

interface IMonth {
  day: number;
  status: string;
  click: number;
}

interface ISchedule {
  janeiro: IMonth[];
  fevereiro: IMonth[];
  marco: IMonth[];
  abril: IMonth[];
  maio: IMonth[];
  junho: IMonth[];
  julho: IMonth[];
  agosto: IMonth[];
  setembro: IMonth[];
  outubro: IMonth[];
  novembro: IMonth[];
  dezembro: IMonth[];
}

interface IRequest {
  ChosenMonth: string;
  day: number;
  service: string;
  max: number;
}

@injectable()
class UpdateServiceDayUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute({ ChosenMonth, day, service, max }: IRequest): Promise<void> {
    const serviceData = await this.servicesRepository.findById(service);

    if (!serviceData) {
      throw new AppError(`Service ${service} not found`);
    }

    const month = ChosenMonth.trim().toLowerCase();
    const date = JSON.parse(serviceData.date_months) as ISchedule;

    // eslint-disable-next-line no-restricted-syntax
    for (const key in date) {
      if (key === month) {
        date[month].map((element: IMonth) => {
          if (element.day === day) {
            if (element.click < max) {
              Object.assign(element, {
                click: element.click + 1,
              });
              return element;
            }

            Object.assign(element, {
              status: "unavailable",
            });
            return element;
          }
          return element;
        });
      }
    }

    console.log(date.junho);

    await this.servicesRepository.create({
      id: serviceData.id,
      name: serviceData.name,
      agency_owner: serviceData.agency_owner,
      addresses: serviceData.addresses,
      months: serviceData.months,
      start_hours: serviceData.start_hours,
      end_hours: serviceData.end_hours,
      on_weekends: serviceData.on_weekends,
      total_people: serviceData.total_people,
      schedule: serviceData.schedule,
      scheduled_today: serviceData.scheduled_today,
      date_months: JSON.stringify(date, null, 2),
    });
  }
}

export { UpdateServiceDayUseCase };
