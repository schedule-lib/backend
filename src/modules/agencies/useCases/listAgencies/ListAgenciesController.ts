import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAgenciesUseCase } from "./ListAgenciesUseCase";

class ListAgenciesController {
  handle(_request: Request, response: Response): Response {
    const listAgenciesUseCase = container.resolve(ListAgenciesUseCase);

    const agencies = listAgenciesUseCase.execute();

    return response.json(agencies);
  }
}

export { ListAgenciesController };
