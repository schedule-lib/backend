import { inject, injectable } from "tsyringe";

import { FindAgencyController } from "@modules/agencies/useCases/findAgency/FindAgencyController";
import { ICreateServiceDTO } from "@modules/services/dtos/ICreateServiceDTO";
import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

import { AppError } from "../../../../errors/AppError";
import { useDefaultMonths } from "./useMonths";

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

    const {
      janeiro,
      fevereiro,
      marco,
      abril,
      maio,
      junho,
      julho,
      agosto,
      setembro,
      outubro,
      novembro,
      dezembro,
    } = useDefaultMonths();

    await this.servicesRepository.create({
      name: data.name,
      agency_owner: data.agency_owner,
      addresses: data.addresses,
      months: data.months,
      days: data.days,
      start_hour: data.start_hour,
      end_hour: data.end_hour,
      total_people: data.total_people,
      scheduling_times: data.scheduling_times,
      janeiro,
      fevereiro,
      marco,
      abril,
      maio,
      junho,
      julho,
      agosto,
      setembro,
      outubro,
      novembro,
      dezembro,
    });
  }
}

export { CreateServiceUseCase };
