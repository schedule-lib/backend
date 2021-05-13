import { container } from "tsyringe";

import { Agency } from "@modules/agencies/entities/Agency";

import { FindAgencyUseCase } from "./FindAgencyUseCase";

class FindAgencyController {
  async handle(email: string): Promise<Agency> {
    const findAgencyUseCase = container.resolve(FindAgencyUseCase);

    const agencies = await findAgencyUseCase.execute(email);

    return agencies;
  }
}

export { FindAgencyController };
