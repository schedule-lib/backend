import { inject, injectable } from "tsyringe";
import { DeleteResult } from "typeorm";

import { AppError } from "../../../../errors/AppError";
import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";

@injectable()
class DeleteAdminUseCase {
  constructor(
    @inject("AdminsRepositories")
    private adminsRepositories: AdminsRepositories
  ) {}

  async execute(
    emailToDelete: string,
    adminRequesting: string
  ): Promise<DeleteResult> {
    const isAdmin = await this.adminsRepositories.findByEmail(adminRequesting);
    if (!isAdmin) {
      throw new AppError("Only admin can delete another admin!", 401);
    }

    return this.adminsRepositories.delete(emailToDelete);
  }
}
export { DeleteAdminUseCase };
