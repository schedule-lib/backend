import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";
import { CreateAdminController } from "./CreateAdminController";
import { CreateAdminUseCase } from "./CreateAdminUseCase";

const adminsRepositories = AdminsRepositories.getInstance();
const createAdminUseCase = new CreateAdminUseCase(adminsRepositories);
const createAdminController = new CreateAdminController(createAdminUseCase);

export { createAdminController };
