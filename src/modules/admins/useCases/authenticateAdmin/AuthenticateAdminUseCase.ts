import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IAdminsRepositories } from "@modules/admins/repositories/IAdminsRepositories";

import { AppError } from "../../../../errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  admin: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateAdminUseCase {
  constructor(
    @inject("AdminsRepositories")
    private adminsRepositories: IAdminsRepositories
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    /**
     * - User exists
     * - User password is correct
     * - Generate token
     */

    const admin = await this.adminsRepositories.findByEmail(email);
    if (!admin) {
      throw new AppError(`Email or password incorrect`);
    }

    const passwordMatch = await compare(password, admin.password);
    if (!passwordMatch) {
      throw new AppError(`Email or password incorrect`);
    }

    const token = sign({}, "5d1e38bc9ff246383c727690ec1888ab", {
      subject: admin.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      admin: {
        name: admin.name,
        email: admin.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateAdminUseCase };
