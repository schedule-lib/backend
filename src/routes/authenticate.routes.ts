import { Router } from "express";

import { AuthenticateAdminController } from "@modules/admins/useCases/authenticateAdmin/AuthenticateAdminController";

const authenticateRoutes = Router();

const authenticateAdminController = new AuthenticateAdminController();
authenticateRoutes.post("/admin/sessions", authenticateAdminController.handle);

export { authenticateRoutes };
