import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSchedulerUseCase } from "./CreateSchedulerUseCase";

class CreateSchedulerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createSchedulerUseCase = container.resolve(CreateSchedulerUseCase);

    const {
      code,
      hour,
      phone_number,
      point,
      province,
      service,
      username,
      date,
    } = request.body;

    await createSchedulerUseCase.execute({
      code,
      hour,
      phone_number,
      point,
      province,
      service,
      username,
      date,
    });

    return response.status(201).json();
  }
}
export { CreateSchedulerController };
