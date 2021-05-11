import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAgenciesUseCase } from "./ListAgenciesUseCase";

class ListAgenciesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listAgenciesUseCase = container.resolve(ListAgenciesUseCase);

    const agencies = await listAgenciesUseCase.execute();

    return response.json(agencies);
  }
}

export { ListAgenciesController };
