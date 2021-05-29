import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindSchedulerByCodeUseCase } from "./FindSchedulerByCodeUseCase";

class FindSchedulerByCodeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findSchedulerByCodeUseCase = container.resolve(
      FindSchedulerByCodeUseCase
    );

    const { code } = request.params;
    const schedules = await findSchedulerByCodeUseCase.execute(code);

    return response.json(schedules);
  }
}
export { FindSchedulerByCodeController };
