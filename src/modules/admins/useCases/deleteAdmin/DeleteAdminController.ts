import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

class DeleteAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { emailToDelete } = request.params;
    const { adminRequesting } = request.body;

    const deleteAdminUseCase = container.resolve(DeleteAdminUseCase);
    const admins = await deleteAdminUseCase.execute(
      emailToDelete,
      adminRequesting as string
    );

    return response.json(admins);
  }
}
export { DeleteAdminController };
