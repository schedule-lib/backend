import { Router } from "express";

import { CreateAgencyController } from "../modules/agencies/useCases/createAgency/CreateAgencyController";
import { ListAgenciesController } from "../modules/agencies/useCases/listAgencies/ListAgenciesController";

const agenciesRoutes = Router();

const createAgencyController = new CreateAgencyController();
agenciesRoutes.post("/", createAgencyController.handle);

const listAgenciesController = new ListAgenciesController();
agenciesRoutes.get("/", listAgenciesController.handle);

const deleteAgencyController = new CreateAgencyController();
agenciesRoutes.delete("/:agency_email", deleteAgencyController.handle);

export { agenciesRoutes };
