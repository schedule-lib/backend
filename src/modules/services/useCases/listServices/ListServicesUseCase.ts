import { inject, injectable } from "tsyringe";

import { Service } from "@modules/services/entities/Service";
import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

@injectable()
class ListServicesUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute(): Promise<Service[]> {
    return this.servicesRepository.list();
  }
}

export { ListServicesUseCase };
