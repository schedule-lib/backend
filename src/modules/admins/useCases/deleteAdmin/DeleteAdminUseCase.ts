import { AppError } from "../../../../errors/AppError";
import { Admin } from "../../entities/Admin";
import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";

class DeleteAdminUseCase {
  constructor(private adminsRepositories: AdminsRepositories) {}

  execute(emailToDelete: string, adminRequesting: string): Admin[] {
    const isAdmin = this.adminsRepositories.fundByEmail(adminRequesting);
    if (!isAdmin) {
      throw new AppError("Only admin can delete another admin!", 401);
    }

    return this.adminsRepositories.delete(emailToDelete);
  }
}
export { DeleteAdminUseCase };
