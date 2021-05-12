import { inject, injectable } from "tsyringe";

import { IAgenciesRepository } from "@modules/agencies/repositories/IAgenciesRepository";
import { ICreateServiceDTO } from "@modules/services/dtos/ICreateServiceDTO";
import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository,
    @inject("AgenciesRepository")
    private agenciesRepository: IAgenciesRepository
  ) {}

  async execute(data: ICreateServiceDTO): Promise<void> {
    const agencyAlreadyExists = await this.agenciesRepository.findByEmail(
      data.agency_owner
    );
    if (!agencyAlreadyExists) {
      throw new AppError("Agency do not found");
    }

    await this.servicesRepository.create({
      name: data.name,
      agency_owner: data.agency_owner,
      fields_to_fill: data.fields_to_fill,
      addresses: data.addresses,
      months: data.months,
      start_hours: data.start_hours,
      end_hours: data.end_hours,
      on_weekends: data.on_weekends,
    });
  }
}

export { CreateServiceUseCase };
