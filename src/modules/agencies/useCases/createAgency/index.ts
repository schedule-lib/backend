import { AgenciesRepository } from "../../repositories/implementations/AgenciesRepository";
import { CreateAgencyController } from "./CreateAgencyController";
import { CreateAgencyUseCase } from "./CreateAgencyUseCase";

const agenciesRepository = AgenciesRepository.getInstance();
const createAgencyUseCase = new CreateAgencyUseCase(agenciesRepository);
const createAgencyController = new CreateAgencyController(createAgencyUseCase);

export { createAgencyController };
