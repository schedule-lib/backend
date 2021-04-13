import { Request, Response } from "express";

import { CreateAgencyUseCase } from "./CreateAgencyUseCase";

class CreateAgencyController {
  constructor(private createAgencyUseCase: CreateAgencyUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email, password } = request.body;

    this.createAgencyUseCase.execute({ name, email, password });

    return response.status(201).json();
  }
}

export { CreateAgencyController };
