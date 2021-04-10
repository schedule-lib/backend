import { Agency } from "../../entities/Agency";

interface IAgencyData {
  name: string;
  email: string;
  password: string;
}

class AgenciesRepository {
  agencies: Agency[];

  constructor() {
    this.agencies = [];
  }

  create({ name, email, password }: IAgencyData): void {
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

  // delete(): void {}
}

export { AgenciesRepository };
