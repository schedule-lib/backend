import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

class DeleteAdminController {
  handle(request: Request, response: Response): Response {
    const { emailToDelete } = request.params;
    const { adminRequesting } = request.body;

    const deleteAdminUseCase = container.resolve(DeleteAdminUseCase);
    const admins = deleteAdminUseCase.execute(
      emailToDelete,
      adminRequesting as string
    );

    return response.json(admins);
  }
}
export { DeleteAdminController };
