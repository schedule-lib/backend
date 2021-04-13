import { Agency } from "../../entities/Agency";
import { IAgenciesRepository } from "../../repositories/IAgenciesRepository";

class ListAgenciesUseCase {
  constructor(private agenciesRepository: IAgenciesRepository) {}

  execute(): Agency[] {
    return this.agenciesRepository.list();
  }
}

export { ListAgenciesUseCase };
