import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAgencyUseCase } from "./CreateAgencyUseCase";

class CreateAgencyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createAgencyUseCase = container.resolve(CreateAgencyUseCase);

    await createAgencyUseCase.execute({ name, email, password });

    return response.status(201).json();
  }
}

export { CreateAgencyController };
