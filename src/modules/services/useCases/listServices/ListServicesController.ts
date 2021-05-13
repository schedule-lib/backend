import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListServicesUseCase } from "./ListServicesUseCase";

class ListServicesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listServicesUseCase = container.resolve(ListServicesUseCase);

    const services = await listServicesUseCase.execute();

    return response.json(services);
  }
}

export { ListServicesController };
