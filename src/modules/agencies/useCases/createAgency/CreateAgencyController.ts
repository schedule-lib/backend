import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAgencyUseCase } from "./CreateAgencyUseCase";

class CreateAgencyController {
  handle(request: Request, response: Response): Response {
    const { name, email, password } = request.body;

    const createAgencyUseCase = container.resolve(CreateAgencyUseCase);

    createAgencyUseCase.execute({ name, email, password });

    return response.status(201).json();
  }
}

export { CreateAgencyController };
