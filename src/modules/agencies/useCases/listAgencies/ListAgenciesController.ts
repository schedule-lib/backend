import { Request, Response } from "express";

import { ListAgenciesUseCase } from "./ListAgenciesUseCase";

class ListAgenciesController {
  constructor(private listAgenciesUseCase: ListAgenciesUseCase) {}

  handle(_request: Request, response: Response): Response {
    const agencies = this.listAgenciesUseCase.execute();

    return response.json(agencies);
  }
}

export { ListAgenciesController };
