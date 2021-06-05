import { inject, injectable } from "tsyringe";

import { FindAgencyController } from "@modules/agencies/useCases/findAgency/FindAgencyController";
import { ICreateServiceDTO } from "@modules/services/dtos/ICreateServiceDTO";
import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute(data: ICreateServiceDTO): Promise<void> {
    const findAgencyController = new FindAgencyController();

    const agencyAlreadyExists = await findAgencyController.handle(
      data.agency_owner
    );
    if (!agencyAlreadyExists) {
      throw new AppError("Agency do not found");
    }

    await this.servicesRepository.create({
      name: data.name,
      agency_owner: data.agency_owner,
      addresses: data.addresses,
      months: data.months,
      start_hours: data.start_hours,
      end_hours: data.end_hours,
      on_weekends: data.on_weekends,
      total_people: data.total_people,
      schedule: data.schedule,
    });
  }
}

export { CreateServiceUseCase };
