import { Request, Response } from "express";
import { container } from "tsyringe";

import { IServiceSerialDTO } from "@modules/services/dtos/ICreateServiceSerialDTO";

import { CreateServiceUseCase } from "./CreateServiceUseCase";
import { useSchedule } from "./scheduleDTO";

class CreateServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createServiceUseCase = container.resolve(CreateServiceUseCase);

    const schedule = useSchedule();

    const {
      addresses,
      agency_owner,
      end_hours,
      months,
      name,
      on_weekends,
      start_hours,
      total_people,
    } = request.body as IServiceSerialDTO;

    const serialized = {
      addresses: JSON.stringify(addresses),
      months: JSON.stringify(months),
      on_weekends: !!on_weekends,
    };

    await createServiceUseCase.execute({
      addresses: serialized.addresses,
      agency_owner,
      end_hours,
      months: serialized.months,
      name,
      on_weekends: serialized.on_weekends,
      start_hours,
      total_people,
      schedule,
    });

    return response.status(201).json();
  }
}

export { CreateServiceController };
