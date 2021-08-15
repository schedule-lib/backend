import { Request, Response } from "express";
import { container } from "tsyringe";

import { IServiceSerialDTO } from "@modules/services/dtos/ICreateServiceSerialDTO";

import { CreateServiceUseCase } from "./CreateServiceUseCase";
import { useSchedule } from "./scheduleDTO";

class CreateServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createServiceUseCase = container.resolve(CreateServiceUseCase);

    const scheduling_times = useSchedule();

    const {
      name,
      agency_owner,
      addresses,
      months,
      days,
      start_hour,
      end_hour,
      total_people,
    } = request.body as IServiceSerialDTO;

    const serialized = {
      addresses: JSON.stringify(addresses),
      months: JSON.stringify(months),
      days: JSON.stringify(days),
    };

    await createServiceUseCase.execute({
      name,
      agency_owner,
      addresses: serialized.addresses,
      months: serialized.months,
      days: serialized.days,
      start_hour,
      end_hour,
      total_people,
      scheduling_times,
    });

    return response.status(201).json();
  }
}

export { CreateServiceController };
