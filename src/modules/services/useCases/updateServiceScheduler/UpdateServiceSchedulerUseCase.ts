import { inject, injectable } from "tsyringe";

import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

import { AppError } from "../../../../errors/AppError";

interface ISchedule {
  id: number;
  hour: string;
  status: string;
  atual: number;
  max: number;
}

@injectable()
class UpdateServiceSchedulerUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute(hour: string, service: string): Promise<void> {
    const serviceData = await this.servicesRepository.findById(service);

    if (!serviceData) {
      throw new AppError(`Service ${service} not found`);
    }

    const schedule = JSON.parse(serviceData.schedule) as ISchedule[];
    schedule.map((scheduler) => {
      if (scheduler.hour === hour) {
        if (scheduler.atual >= scheduler.max) {
          Object.assign(scheduler, {
            status: "unavailable",
          });
          return scheduler;
        }

        Object.assign(scheduler, {
          atual: scheduler.atual + 1,
        });
        return scheduler;
      }
      return scheduler;
    });

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
      schedule: JSON.stringify(schedule, null, 2),
      scheduled_today: serviceData.scheduled_today,
      date_months: serviceData.date_months,
    });
  }
}

export { UpdateServiceSchedulerUseCase };
