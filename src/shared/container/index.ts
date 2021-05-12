import { container } from "tsyringe";

import { ServicesRepository } from "@modules/services/repositories/implementations/ServicesRepository";
import { IServicesRepository } from "@modules/services/repositories/IServicesRepository";

import { IAdminsRepositories } from "../../modules/admins/repositories/IAdminsRepositories";
import { AdminsRepositories } from "../../modules/admins/repositories/implementations/AdminsRepositories";
import { IAgenciesRepository } from "../../modules/agencies/repositories/IAgenciesRepository";
import { AgenciesRepository } from "../../modules/agencies/repositories/implementations/AgenciesRepository";

container.registerSingleton<IAgenciesRepository>(
  "AgenciesRepository",
  AgenciesRepository
);
container.registerSingleton<IAdminsRepositories>(
  "AdminsRepositories",
  AdminsRepositories
);
container.registerSingleton<IServicesRepository>(
  "ServicesRepository",
  ServicesRepository
);
