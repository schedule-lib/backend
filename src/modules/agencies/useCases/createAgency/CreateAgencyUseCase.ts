import { hash } from "bcrypt";
import { injectable, inject } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateAgencyDTO } from "../../dtos/ICreateAgencyDTO";
import { IAgenciesRepository } from "../../repositories/IAgenciesRepository";

@injectable()
class CreateAgencyUseCase {
  constructor(
    @inject("AgenciesRepository")
    private agenciesRepository: IAgenciesRepository
  ) {}

  async execute({ name, email, password }: ICreateAgencyDTO): Promise<void> {
    const agencyAlreadyExists = await this.agenciesRepository.findByEmail(
      email
    );

    if (agencyAlreadyExists) {
      throw new AppError("Agency already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.agenciesRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateAgencyUseCase };
