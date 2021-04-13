import { Request, Response } from "express";

import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

class DeleteAdminController {
  constructor(private deleteAdminUseCase: DeleteAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { emailToDelete } = request.params;
    const { adminRequesting } = request.body;

    const admins = this.deleteAdminUseCase.execute(
      emailToDelete,
      adminRequesting as string
    );

    return response.json(admins);
  }
}
export { DeleteAdminController };
