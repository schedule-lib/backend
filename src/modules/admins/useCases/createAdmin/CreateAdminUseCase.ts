import { hash } from "bcrypt";
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

    const passwordHash = await hash(password, 8);

    await this.adminsRepositories.create({
      name,
      email,
      password: passwordHash,
    });
  }
}
export { CreateAdminUseCase };
