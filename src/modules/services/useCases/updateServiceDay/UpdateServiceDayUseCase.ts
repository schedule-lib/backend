import { inject, injectable } from "tsyringe";

import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

import { AppError } from "../../../../errors/AppError";
import { updateChosenMonth } from "./updateChosenMonth";

interface IRequest {
  ChosenMonth: string;
  day: number;
  service: string;
}

@injectable()
class UpdateServiceDayUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute({ ChosenMonth, day, service }: IRequest): Promise<void> {
    const serviceData = await this.servicesRepository.findById(service);

    if (!serviceData) {
      throw new AppError(`Service ${service} not found`);
    }

    const month = ChosenMonth.trim().toLowerCase();
    if (month === "janeiro") {
      serviceData.janeiro = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.janeiro,
      });
    }
    if (month === "fevereiro") {
      serviceData.fevereiro = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.fevereiro,
      });
    }
    if (month === "março") {
      serviceData.marco = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.marco,
      });
    }
    if (month === "abril") {
      serviceData.abril = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.abril,
      });
    }
    if (month === "maio") {
      serviceData.maio = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.maio,
      });
    }
    if (month === "junho") {
      serviceData.junho = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.junho,
      });
    }
    if (month === "julho") {
      serviceData.julho = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.julho,
      });
    }
    if (month === "agosto") {
      serviceData.agosto = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.agosto,
      });
    }
    if (month === "setembro") {
      serviceData.setembro = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.setembro,
      });
    }
    if (month === "outubro") {
      serviceData.outubro = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.outubro,
      });
    }
    if (month === "novembro") {
      serviceData.novembro = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.novembro,
      });
    }
    if (month === "dezembro") {
      serviceData.dezembro = updateChosenMonth({
        chosenDay: day,
        total_people: serviceData.total_people,
        monthData: serviceData.dezembro,
      });
    }

    await this.servicesRepository.create(serviceData);
  }
}

export { UpdateServiceDayUseCase };
