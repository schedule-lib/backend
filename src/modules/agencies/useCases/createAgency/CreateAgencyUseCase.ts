import { injectable, inject } from "tsyringe";

import { ICreateAgencyDTO } from "../../dtos/ICreateAgencyDTO";
import { IAgenciesRepository } from "../../repositories/IAgenciesRepository";

@injectable()
class CreateAgencyUseCase {
  constructor(
    @inject("AgenciesRepository")
    private agenciesRepository: IAgenciesRepository
  ) {}

  async execute({ name, email, password }: ICreateAgencyDTO): Promise<void> {
    await this.agenciesRepository.create({ name, email, password });
  }
}

export { CreateAgencyUseCase };
