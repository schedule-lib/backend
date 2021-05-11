import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAdminsUseCase } from "./ListAdminsUseCase";

class ListAdminsController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listAdminsUseCase = container.resolve(ListAdminsUseCase);

    const admins = await listAdminsUseCase.execute();

    return response.json(admins);
  }
}
export { ListAdminsController };
