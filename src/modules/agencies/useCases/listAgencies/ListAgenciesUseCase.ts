import { injectable, inject } from "tsyringe";

import { Agency } from "../../entities/Agency";
import { IAgenciesRepository } from "../../repositories/IAgenciesRepository";

@injectable()
class ListAgenciesUseCase {
  constructor(
    @inject("AgenciesRepository")
    private agenciesRepository: IAgenciesRepository
  ) {}

  async execute(): Promise<Agency[]> {
    return this.agenciesRepository.list();
  }
}

export { ListAgenciesUseCase };
