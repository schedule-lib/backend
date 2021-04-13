import { inject, injectable } from "tsyringe";

import { ICreateAdminDTO } from "../../dtos/ICreateAdminDTO";
import { IAdminsRepositories } from "../../repositories/IAdminsRepositories";

@injectable()
class CreateAdminUseCase {
  constructor(
    @inject("AdminsRepositories")
    private adminsRepositories: IAdminsRepositories
  ) {}

  execute({ name, email, password }: ICreateAdminDTO): void {
    this.adminsRepositories.create({ name, email, password });
  }
}
export { CreateAdminUseCase };
