import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetServicesByAgencyUseCase } from "./GetServicesByAgencyUseCase";

class GetServicesByAgencyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getServicesByAgencyUseCase = container.resolve(
      GetServicesByAgencyUseCase
    );

    const { agency } = request.params;
    const services = await getServicesByAgencyUseCase.execute(agency);

    return response.json(services);
  }
}
export { GetServicesByAgencyController };
