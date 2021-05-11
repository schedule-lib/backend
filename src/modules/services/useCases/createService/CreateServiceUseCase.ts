import { inject, injectable } from "tsyringe";

import { AppError } from "@errors";
import { ICreateServiceDTO } from "@modules/services/dtos/ICreateServiceDTO";
import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute(data: ICreateServiceDTO): Promise<void> {
    const agencyAlreadyExists = await this.servicesRepository.findByName(
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
