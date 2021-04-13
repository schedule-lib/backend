import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAdminUseCase } from "./CreateAdminUseCase";

class CreateAdminController {
  handle(request: Request, response: Response): Response {
    const { name, email, password } = request.body;

    const createAdminUseCase = container.resolve(CreateAdminUseCase);

    createAdminUseCase.execute({ name, email, password });

    return response.status(201).json();
  }
}
export { CreateAdminController };
