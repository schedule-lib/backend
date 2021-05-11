import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AgenciesRepository } from "@modules/agencies/repositories/implementations/AgenciesRepository";

import { AppError } from "../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAgencyIsAuthenticated(
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
    const { sub: agency_id } = verify(
      token,
      "5d1e38bc9ff246383c727690ec1888ab"
    ) as IPayload;

    const agenciesRepository = new AgenciesRepository();

    const agency = agenciesRepository.findById(agency_id);
    if (!agency) {
      throw new AppError("Agency not found", 401);
    }

    request.agency = {
      id: agency_id,
    };

    next();
  } catch (error) {
    throw new AppError(error.message, 401);
  }
}
