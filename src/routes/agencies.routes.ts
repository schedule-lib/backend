import { Router } from "express";

import { AgenciesRepository } from "../modules/agencies/repositories/implementations/AgenciesRepository";
import { createAgencyController } from "../modules/agencies/useCases/createAgency";
import { listAgenciesController } from "../modules/agencies/useCases/listAgencies";

const agenciesRoutes = Router();

agenciesRoutes.post("/", (request, response) =>
  createAgencyController.handle(request, response)
);

agenciesRoutes.get("/", (request, response) =>
  listAgenciesController.handle(request, response)
);

const agenciesRepository = AgenciesRepository.getInstance();
agenciesRoutes.delete("/:agency_email", (request, response) => {
  const { agency_email } = request.params;
  const agencies = agenciesRepository.delete(agency_email);

  return response.json(agencies);
});

export { agenciesRoutes };
