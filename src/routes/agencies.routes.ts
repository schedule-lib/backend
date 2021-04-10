import { Router } from "express";

import { AgenciesRepository } from "../modules/agencies/repositories/implementations/AgenciesRepository";

const agenciesRoutes = Router();

const agenciesRepository = new AgenciesRepository();
agenciesRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body;
  agenciesRepository.create({ name, email, password });

  return response.json();
});

agenciesRoutes.get("/", (_request, response) => {
  const agencies = agenciesRepository.list();

  return response.json(agencies);
});

export { agenciesRoutes };
