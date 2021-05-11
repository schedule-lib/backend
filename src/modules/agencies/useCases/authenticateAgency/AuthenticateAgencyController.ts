import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateAgencyUseCase } from "./AuthenticateAgencyUseCase";

class AuthenticateAgencyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateAgencyUseCase = container.resolve(
      AuthenticateAgencyUseCase
    );

    const { email, password } = request.body;

    const token = await authenticateAgencyUseCase.execute({
      email,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateAgencyController };
