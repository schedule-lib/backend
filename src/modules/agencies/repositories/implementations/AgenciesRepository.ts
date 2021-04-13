import { ICreateAgencyDTO } from "../../dtos/ICreateAgencyDTO";
import { Agency } from "../../entities/Agency";
import { IAgenciesRepository } from "../IAgenciesRepository";

class AgenciesRepository implements IAgenciesRepository {
  agencies: Agency[];

  private static INSTANCE = new AgenciesRepository();

  private constructor() {
    this.agencies = [];
  }

  public static getInstance(): AgenciesRepository {
    if (!AgenciesRepository.INSTANCE) {
      AgenciesRepository.INSTANCE = new AgenciesRepository();
    }

    return AgenciesRepository.INSTANCE;
  }

  create({ name, email, password }: ICreateAgencyDTO): void {
    const agencyObejct = new Agency();
    Object.assign(agencyObejct, {
      name,
      email,
      password,
      created_at: new Date(),
    });

    this.agencies.push(agencyObejct);
  }

  list(): Agency[] {
    return this.agencies;
  }

  findAgencyPosition(email: string): number {
    const agency = this.agencies.findIndex((agency) => agency.email === email);

    return agency;
  }

  delete(email: string): Agency[] {
    const agency = this.findAgencyPosition(email);
    const deleted = this.agencies.splice(agency, 1);

    return deleted;
  }
}

export { AgenciesRepository };
