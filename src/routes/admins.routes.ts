import { Router } from "express";

import { createAdminController } from "../modules/admins/useCases/createAdmin";
import { deleteAdminController } from "../modules/admins/useCases/deleteAdmin";
import { listAdminsController } from "../modules/admins/useCases/listAdmins";

const adminsRoutes = Router();

adminsRoutes.post("/", (request, response) =>
  createAdminController.handle(request, response)
);
adminsRoutes.get("/", (request, response) =>
  listAdminsController.handle(request, response)
);
adminsRoutes.delete("/:email", (request, response) =>
  deleteAdminController.handle(request, response)
);

export { adminsRoutes };
