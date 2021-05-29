import { getRepository, Repository } from "typeorm";

import { Scheduled } from "@modules/accounts/entities/Scheduled";

import {
  createScheduledDTO,
  IScheduledRepository,
} from "../IScheduledRepository";

class ScheduledRepository implements IScheduledRepository {
  private repository: Repository<Scheduled>;

  constructor() {
    this.repository = getRepository(Scheduled);
  }

  async create({
    code,
    username,
    service,
    point,
    phone_number,
    province,
    hour,
  }: createScheduledDTO): Promise<void> {
    const schedule = this.repository.create({
      code,
      username,
      service,
      point,
      phone_number,
      province,
      hour,
    });

    await this.repository.save(schedule);
  }

  async findByCode(code: string): Promise<Scheduled[]> {
    const schedule = await this.repository.find({
      where: {
        code,
      },
    });

    return schedule;
  }
}
export { ScheduledRepository };
