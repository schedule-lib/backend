import { Admin } from "../../entities/Admin";
import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";

class DeleteAdminUseCase {
  constructor(private adminsRepositories: AdminsRepositories) {}

  execute(email: string): Admin[] {
    return this.adminsRepositories.delete(email);
  }
}
export { DeleteAdminUseCase };
