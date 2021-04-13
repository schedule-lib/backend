import { Request, Response } from "express";

import { ListAdminsUseCase } from "./ListAdminsUseCase";

class ListAdminsController {
  constructor(private listAdminsUseCase: ListAdminsUseCase) {}

  handle(_request: Request, response: Response): Response {
    const admins = this.listAdminsUseCase.execute();

    return response.json(admins);
  }
}
export { ListAdminsController };
