import { Request, Response } from "express";

import { CreateAdminUseCase } from "./CreateAdminUseCase";

class CreateAdminController {
  constructor(private createAdminUseCase: CreateAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email, password } = request.body;

    this.createAdminUseCase.execute({ name, email, password });

    return response.status(201).json();
  }
}
export { CreateAdminController };
