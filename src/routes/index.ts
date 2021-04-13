import { Router } from "express";

import { adminsRoutes } from "./admins.routes";
import { agenciesRoutes } from "./agencies.routes";

const routes = Router();

routes.use("/agencies", agenciesRoutes);
routes.use("/admins", adminsRoutes);

export { routes };
