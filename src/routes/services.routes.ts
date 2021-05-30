import { Router } from "express";

import { CreateServiceController } from "@modules/services/useCases/createService/CreateServiceController";
import { GetServiceByNameController } from "@modules/services/useCases/getServiceByName/GetServiceByNameController";
import { GetServicesByAgencyController } from "@modules/services/useCases/getServicesByAgency/GetServicesByAgencyController";
import { ListServicesController } from "@modules/services/useCases/listServices/ListServicesController";

const servicesRoutes = Router();

const createAdminController = new CreateServiceController();
const listServicesController = new ListServicesController();
const getServiceByNameController = new GetServiceByNameController();
const getServicesByAgencyController = new GetServicesByAgencyController();

servicesRoutes.post("/", createAdminController.handle);
servicesRoutes.get("/search", getServiceByNameController.handle);
servicesRoutes.get("/", listServicesController.handle);
servicesRoutes.get("/agencies/:agency", getServicesByAgencyController.handle);

export { servicesRoutes };
