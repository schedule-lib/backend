import { inject, injectable } from "tsyringe";

import { Service } from "@modules/services/entities/Service";
import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

@injectable()
class GetServicesByAgencyUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute(agency: string): Promise<Service[]> {
    const services = await this.servicesRepository.findByAgency(agency);

    return services;
  }
}

export { GetServicesByAgencyUseCase };
