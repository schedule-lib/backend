import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Admin } from "../../entities/Admin";
import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";

@injectable()
class DeleteAdminUseCase {
  constructor(
    @inject("AdminsRepositories")
    private adminsRepositories: AdminsRepositories
  ) {}

  execute(emailToDelete: string, adminRequesting: string): Admin[] {
    const isAdmin = this.adminsRepositories.fundByEmail(adminRequesting);
    if (!isAdmin) {
      throw new AppError("Only admin can delete another admin!", 401);
    }

    return this.adminsRepositories.delete(emailToDelete);
  }
}
export { DeleteAdminUseCase };
