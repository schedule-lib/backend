import { inject, injectable } from "tsyringe";

import { Service } from "@modules/services/entities/Service";
import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

@injectable()
class GetServiceByNameUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute(serviceName: string): Promise<Service> {
    return this.servicesRepository.findByName(serviceName);
  }
}

export { GetServiceByNameUseCase };
