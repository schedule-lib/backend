import { injectable, inject } from "tsyringe";

import { Agency } from "../../entities/Agency";
import { IAgenciesRepository } from "../../repositories/IAgenciesRepository";

@injectable()
class FindAgencyUseCase {
  constructor(
    @inject("AgenciesRepository")
    private agenciesRepository: IAgenciesRepository
  ) {}

  async execute(email: string): Promise<Agency> {
    return this.agenciesRepository.findByEmail(email);
  }
}

export { FindAgencyUseCase };
