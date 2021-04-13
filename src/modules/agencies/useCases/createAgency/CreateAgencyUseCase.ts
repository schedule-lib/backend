import { injectable, inject } from "tsyringe";

import { ICreateAgencyDTO } from "../../dtos/ICreateAgencyDTO";
import { IAgenciesRepository } from "../../repositories/IAgenciesRepository";

@injectable()
class CreateAgencyUseCase {
  constructor(
    @inject("AgenciesRepository")
    private agenciesRepository: IAgenciesRepository
  ) {}

  execute({ name, email, password }: ICreateAgencyDTO): void {
    this.agenciesRepository.create({ name, email, password });
  }
}

export { CreateAgencyUseCase };
