import { AgenciesRepository } from "../../repositories/implementations/AgenciesRepository";
import { ListAgenciesController } from "./ListAgenciesController";
import { ListAgenciesUseCase } from "./ListAgenciesUseCase";

const agenciesRepository = AgenciesRepository.getInstance();
const listAgenciesUseCase = new ListAgenciesUseCase(agenciesRepository);
const listAgenciesController = new ListAgenciesController(listAgenciesUseCase);

export { listAgenciesController };
