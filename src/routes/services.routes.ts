import { Router } from "express";

import { CreateServiceController } from "@modules/services/useCases/createService/CreateServiceController";
import { GetServiceByNameController } from "@modules/services/useCases/getServiceByName/GetServiceByNameController";

const servicesRoutes = Router();

const createAdminController = new CreateServiceController();
servicesRoutes.post("/", createAdminController.handle);

const getServiceByNameController = new GetServiceByNameController();
servicesRoutes.get("/search", getServiceByNameController.handle);

export { servicesRoutes };
