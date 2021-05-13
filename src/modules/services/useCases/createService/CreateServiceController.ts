import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateServiceUseCase } from "./CreateServiceUseCase";

class CreateServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    console.log("Elias alexandre");

    const createServiceUseCase = container.resolve(CreateServiceUseCase);

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

    console.log(
      `Endereços: ${addresses}`,
      `Campos: ${fields_to_fill}`,
      `Mêses: ${months}`
    );

    // const serialized = {
    //   addresses: ,
    //   fields_to_fill,
    //   months,
    //   on_weekends: !!on_weekends,
    // }

    await createServiceUseCase.execute({
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
