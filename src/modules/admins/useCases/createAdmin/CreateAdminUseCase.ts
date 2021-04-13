import { ICreateAdminDTO } from "../../dtos/ICreateAdminDTO";
import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";

class CreateAdminUseCase {
  constructor(private adminsRepositories: AdminsRepositories) {}

  execute({ name, email, password }: ICreateAdminDTO): void {
    this.adminsRepositories.create({ name, email, password });
  }
}
export { CreateAdminUseCase };
