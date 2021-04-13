import { Admin } from "../../entities/Admin";
import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";

class ListAdminsUseCase {
  constructor(private adminsRepositories: AdminsRepositories) {}

  execute(): Admin[] {
    return this.adminsRepositories.list();
  }
}
export { ListAdminsUseCase };
