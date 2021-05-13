import { Request, Response } from "express";
import { container } from "tsyringe";

import { IServiceSerialDTO } from "@modules/services/dtos/ICreateServiceSerialDTO";

import { CreateServiceUseCase } from "./CreateServiceUseCase";

class CreateServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
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
    } = request.body as IServiceSerialDTO;

    const serialized = {
      addresses: JSON.stringify(addresses),
      fields_to_fill: JSON.stringify(fields_to_fill),
      months: JSON.stringify(months),
      on_weekends: !!on_weekends,
    };

    await createServiceUseCase.execute({
      addresses: serialized.addresses,
      agency_owner,
      end_hours,
      fields_to_fill: serialized.fields_to_fill,
      months: serialized.months,
      name,
      on_weekends: serialized.on_weekends,
      start_hours,
    });

    return response.status(201).json();
  }
}

export { CreateServiceController };
