import { injectable, inject } from "tsyringe";

import { Agency } from "../../entities/Agency";
import { IAgenciesRepository } from "../../repositories/IAgenciesRepository";

@injectable()
class ListAgenciesUseCase {
  constructor(
    @inject("AgenciesRepository")
    private agenciesRepository: IAgenciesRepository
  ) {}

  execute(): Agency[] {
    return this.agenciesRepository.list();
  }
}

export { ListAgenciesUseCase };
