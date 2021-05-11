import { Router } from "express";

import { adminsRoutes } from "./admins.routes";
import { agenciesRoutes } from "./agencies.routes";
import { agenciesSessions } from "./agenciesSessions.routes";
import { authenticateRoutes } from "./authenticate.routes";

const routes = Router();

routes.use("/agencies", agenciesRoutes);
routes.use("/admins", adminsRoutes);
routes.use(authenticateRoutes);
routes.use(agenciesSessions);

export { routes };
