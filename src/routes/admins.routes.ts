import { Router } from "express";

import { CreateAdminController } from "../modules/admins/useCases/createAdmin/CreateAdminController";
import { DeleteAdminController } from "../modules/admins/useCases/deleteAdmin/DeleteAdminController";
import { ListAdminsController } from "../modules/admins/useCases/listAdmins/ListAdminsController";

const adminsRoutes = Router();

const createAdminController = new CreateAdminController();
adminsRoutes.post("/", createAdminController.handle);

const listAdminsController = new ListAdminsController();
adminsRoutes.get("/", listAdminsController.handle);

const deleteAdminController = new DeleteAdminController();
adminsRoutes.delete("/:emailToDelete", deleteAdminController.handle);

export { adminsRoutes };
