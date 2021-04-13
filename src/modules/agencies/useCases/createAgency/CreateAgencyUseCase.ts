import { ICreateAgencyDTO } from "../../dtos/ICreateAgencyDTO";
import { IAgenciesRepository } from "../../repositories/IAgenciesRepository";

class CreateAgencyUseCase {
  constructor(private agenciesRepository: IAgenciesRepository) {}

  execute({ name, email, password }: ICreateAgencyDTO): void {
    this.agenciesRepository.create({ name, email, password });
  }
}

export { CreateAgencyUseCase };
