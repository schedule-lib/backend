import { Router } from "express";

import { CreateServiceController } from "@modules/services/useCases/createService/CreateServiceController";
import { GetServiceByNameController } from "@modules/services/useCases/getServiceByName/GetServiceByNameController";
import { ListServicesController } from "@modules/services/useCases/listServices/ListServicesController";

const servicesRoutes = Router();

const createAdminController = new CreateServiceController();
servicesRoutes.post("/", createAdminController.handle);

const getServiceByNameController = new GetServiceByNameController();
servicesRoutes.get("/search", getServiceByNameController.handle);

const listServicesController = new ListServicesController();
servicesRoutes.get("/", listServicesController.handle);

export { servicesRoutes };
