import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AdminsRepositories } from "@modules/admins/repositories/implementations/AdminsRepositories";

import { AppError } from "../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAdminIsAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    throw new AppError("Token error", 401);
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    throw new AppError("Token malformed", 401);
  }

  try {
    const { sub: user_id } = verify(
      token,
      "5d1e38bc9ff246383c727690ec1888ab"
    ) as IPayload;

    const adminsRepository = new AdminsRepositories();

    const admin = adminsRepository.findById(user_id);
    if (!admin) {
      throw new AppError("User not found", 401);
    }

    request.admin = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError(error.message, 401);
  }
}
