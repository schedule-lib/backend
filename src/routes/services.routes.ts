import { Router } from "express";

import { CreateServiceController } from "@modules/services/useCases/createService/CreateServiceController";

const servicesRoutes = Router();

const createAdminController = new CreateServiceController();
servicesRoutes.post("/", createAdminController.handle);

export { servicesRoutes };
