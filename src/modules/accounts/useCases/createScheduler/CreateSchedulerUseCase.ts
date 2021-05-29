import { inject, injectable } from "tsyringe";

import { IScheduledRepository } from "@modules/accounts/repositories/IScheduledRepository";

interface IRequest {
  code: string;
  username: string;
  service: string;
  point: string;
  phone_number: string;
  province: string;
  hour: string;
  date: string;
}

@injectable()
class CreateSchedulerUseCase {
  constructor(
    @inject("ScheduledRepository")
    private scheduledRepository: IScheduledRepository
  ) {}

  async execute({
    code,
    hour,
    phone_number,
    point,
    province,
    service,
    username,
    date,
  }: IRequest): Promise<void> {
    await this.scheduledRepository.create({
      code,
      hour,
      phone_number,
      point,
      province,
      service,
      username,
      date,
    });
  }
}
export { CreateSchedulerUseCase };
