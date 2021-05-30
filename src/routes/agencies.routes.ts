import { Router } from "express";

import { CreateAgencyController } from "../modules/agencies/useCases/createAgency/CreateAgencyController";
import { ListAgenciesController } from "../modules/agencies/useCases/listAgencies/ListAgenciesController";

const agenciesRoutes = Router();

const createAgencyController = new CreateAgencyController();
const listAgenciesController = new ListAgenciesController();
const deleteAgencyController = new CreateAgencyController();

agenciesRoutes.post("/", createAgencyController.handle);
agenciesRoutes.get("/", listAgenciesController.handle);
agenciesRoutes.delete("/:agency_email", deleteAgencyController.handle);

export { agenciesRoutes };
