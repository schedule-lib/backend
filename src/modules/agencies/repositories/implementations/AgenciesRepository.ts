import { getRepository, Repository } from "typeorm";

import { ICreateAgencyDTO } from "../../dtos/ICreateAgencyDTO";
import { Agency } from "../../entities/Agency";
import { IAgenciesRepository } from "../IAgenciesRepository";

class AgenciesRepository implements IAgenciesRepository {
  private repository: Repository<Agency>;

  constructor() {
    this.repository = getRepository(Agency);
  }

  async create({ name, email, password }: ICreateAgencyDTO): Promise<void> {
    const agency = this.repository.create({ name, email, password });

    await this.repository.save(agency);
  }

  async list(): Promise<Agency[]> {
    return this.repository.find();
  }

  async findByEmail(email: string): Promise<Agency> {
    const agency = await this.repository.findOne({
      where: {
        email,
      },
    });

    return agency;
  }

  async delete(email: string): Promise<void> {
    await this.repository.delete(email);
  }
}

export { AgenciesRepository };
