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
    const agencyObejct = {
      name,
      email,
      password,
    };

    this.agencies.push(agencyObejct);
  }

  // list(): void {}

  // delete(): void {}
}

export { AgenciesRepository };
