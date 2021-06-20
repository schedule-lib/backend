import { Router } from "express";

import { CreateSchedulerController } from "@modules/accounts/useCases/createScheduler/CreateSchedulerController";
import { FindSchedulerByCodeController } from "@modules/accounts/useCases/findSchedulerByCode/FindSchedulerByCodeController";
import { UpdateServiceDayController } from "@modules/services/useCases/updateServiceDay/UpdateServiceDayController";
import { UpdateServiceSchedulerController } from "@modules/services/useCases/updateServiceScheduler/UpdateServiceSchedulerController";

const schedulerRoutes = Router();

const createSchedulerController = new CreateSchedulerController();
const findSchedulerByCodeController = new FindSchedulerByCodeController();
const updateServiceSchedulerController = new UpdateServiceSchedulerController();
const updateServiceDayController = new UpdateServiceDayController();

schedulerRoutes.post("/", createSchedulerController.handle);
schedulerRoutes.get("/:code", findSchedulerByCodeController.handle);
schedulerRoutes.patch(
  "/schedule/:service",
  updateServiceSchedulerController.handle
);
schedulerRoutes.patch("/day/:service", updateServiceDayController.handle);

export { schedulerRoutes };
