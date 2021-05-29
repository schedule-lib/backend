import { inject, injectable } from "tsyringe";

import { Scheduled } from "@modules/accounts/entities/Scheduled";
import { IScheduledRepository } from "@modules/accounts/repositories/IScheduledRepository";

@injectable()
class FindSchedulerByCodeUseCase {
  constructor(
    @inject("ScheduledRepository")
    private scheduledRepository: IScheduledRepository
  ) {}

  async execute(code: string): Promise<Scheduled[]> {
    const schedules = await this.scheduledRepository.findByCode(code);
    return schedules;
  }
}
export { FindSchedulerByCodeUseCase };
