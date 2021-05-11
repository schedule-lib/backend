import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateAdminDTO } from "../../dtos/ICreateAdminDTO";
import { IAdminsRepositories } from "../../repositories/IAdminsRepositories";

@injectable()
class CreateAdminUseCase {
  constructor(
    @inject("AdminsRepositories")
    private adminsRepositories: IAdminsRepositories
  ) {}

  async execute({ name, email, password }: ICreateAdminDTO): Promise<void> {
    const adminAlreadyExists = await this.adminsRepositories.findByEmail(email);

    if (adminAlreadyExists) {
      throw new AppError("Admin already exists");
    }

    await this.adminsRepositories.create({ name, email, password });
  }
}
export { CreateAdminUseCase };
