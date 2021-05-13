import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetServiceByNameUseCase } from "./GetServiceByNameUseCase";

class GetServiceByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getServiceByNameUseCase = container.resolve(GetServiceByNameUseCase);

    const { service_name } = request.query;

    const service = await getServiceByNameUseCase.execute(
      service_name as string
    );

    return response.json(service);
  }
}

export { GetServiceByNameController };
