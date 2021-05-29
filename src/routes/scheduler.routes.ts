import { Router } from "express";

import { CreateSchedulerController } from "@modules/accounts/useCases/createScheduler/CreateSchedulerController";
import { FindSchedulerByCodeController } from "@modules/accounts/useCases/findSchedulerByCode/FindSchedulerByCodeController";

const schedulerRoutes = Router();

const createSchedulerController = new CreateSchedulerController();
const findSchedulerByCodeController = new FindSchedulerByCodeController();

schedulerRoutes.post("/", createSchedulerController.handle);
schedulerRoutes.get("/:code", findSchedulerByCodeController.handle);

export { schedulerRoutes };
