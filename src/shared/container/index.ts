import { container } from "tsyringe";

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
