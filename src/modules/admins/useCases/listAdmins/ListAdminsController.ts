import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAdminsUseCase } from "./ListAdminsUseCase";

class ListAdminsController {
  handle(_request: Request, response: Response): Response {
    const listAdminsUseCase = container.resolve(ListAdminsUseCase);

    const admins = listAdminsUseCase.execute();

    return response.json(admins);
  }
}
export { ListAdminsController };
