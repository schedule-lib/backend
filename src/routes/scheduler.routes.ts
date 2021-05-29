import { Router } from "express";

import { CreateSchedulerController } from "@modules/accounts/useCases/createScheduler/CreateSchedulerController";

const schedulerRoutes = Router();

const createSchedulerController = new CreateSchedulerController();
schedulerRoutes.post("/", createSchedulerController.handle);

export { schedulerRoutes };
