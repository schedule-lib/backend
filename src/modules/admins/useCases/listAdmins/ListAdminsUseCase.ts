import { inject, injectable } from "tsyringe";

import { Admin } from "../../entities/Admin";
import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";

@injectable()
class ListAdminsUseCase {
  constructor(
    @inject("AdminsRepositories")
    private adminsRepositories: AdminsRepositories
  ) {}

  execute(): Admin[] {
    return this.adminsRepositories.list();
  }
}
export { ListAdminsUseCase };
