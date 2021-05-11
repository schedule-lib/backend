import { Router } from "express";

import { AuthenticateAgencyController } from "@modules/agencies/useCases/authenticateAgency/AuthenticateAgencyController";

const agenciesSessions = Router();

const authenticateAgencyController = new AuthenticateAgencyController();
agenciesSessions.post("/agency/sessions", authenticateAgencyController.handle);

export { agenciesSessions };
