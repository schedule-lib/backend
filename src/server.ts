import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Response, Request } from "express";

import { AppError } from "./errors/AppError";
import { routes } from "./routes";

import "./database";
import "./shared/container";

dotenv.config({});

const app = express();

// MIDDLEWARES
app.use(cors({}));
app.use(express.json());
app.use(routes);
// Errors handle
app.use(
  (err: Error, _request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(process.env.PORT || 3333, () =>
  console.log(`SERVER IS RUNNING IN PORT = ${3333}`)
);
