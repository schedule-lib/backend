import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateServiceDayUseCase } from "./UpdateServiceDayUseCase";

interface IRequest {
  ChosenMonth: string;
  day: number;
  max: number;
}

class UpdateServiceDayController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateServiceDayUseCase = container.resolve(UpdateServiceDayUseCase);

    const { day, ChosenMonth, max } = request.body as IRequest;
    const { service } = request.params;

    await updateServiceDayUseCase.execute({
      day,
      ChosenMonth,
      max,
      service,
    });

    return response.status(201).json();
  }
}
export { UpdateServiceDayController };
