import { Request, Response } from "express";

import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

class DeleteAdminController {
  constructor(private deleteAdminUseCase: DeleteAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email } = request.params;
    const admins = this.deleteAdminUseCase.execute(email);

    return response.json(admins);
  }
}
export { DeleteAdminController };
