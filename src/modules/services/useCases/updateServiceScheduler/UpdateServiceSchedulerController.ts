import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateServiceSchedulerUseCase } from "./UpdateServiceSchedulerUseCase";

interface IRequest {
  hour: string;
}

class UpdateServiceSchedulerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateServiceSchedulerUseCase = container.resolve(
      UpdateServiceSchedulerUseCase
    );

    const { hour } = request.body as IRequest;
    const { service } = request.params;

    await updateServiceSchedulerUseCase.execute(hour, service);

    return response.status(201).json();
  }
}
export { UpdateServiceSchedulerController };
