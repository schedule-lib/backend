import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IAgenciesRepository } from "@modules/agencies/repositories/IAgenciesRepository";

import { AppError } from "../../../../errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  agency: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateAgencyUseCase {
  constructor(
    @inject("AgenciesRepository")
    private agenciesRepositories: IAgenciesRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const agency = await this.agenciesRepositories.findByEmail(email);
    if (!agency) {
      throw new AppError(`Email or password incorrect`);
    }

    const passwordMatch = await compare(password, agency.password);
    if (!passwordMatch) {
      throw new AppError(`Email or password incorrect`);
    }

    const token = sign({}, "5d1e38bc9ff246383c727690ec1888ab", {
      subject: agency.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      agency: {
        name: agency.name,
        email: agency.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateAgencyUseCase };
