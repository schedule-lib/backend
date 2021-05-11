import { Request, Response } from "express";

import { CreateServiceUseCase } from "./CreateServiceUseCase";

class CreateServiceController {
  constructor(private createServiceUseCase: CreateServiceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      addresses,
      agency_owner,
      end_hours,
      fields_to_fill,
      months,
      name,
      on_weekends,
      start_hours,
    } = request.body;

    await this.createServiceUseCase.execute({
      addresses,
      agency_owner,
      end_hours,
      fields_to_fill,
      months,
      name,
      on_weekends,
      start_hours,
    });

    return response.status(201).json();
  }
}

export { CreateServiceController };
