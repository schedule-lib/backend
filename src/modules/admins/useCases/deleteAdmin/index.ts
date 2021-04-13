import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";
import { DeleteAdminController } from "./DeleteAdminController";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

const adminsRepositories = AdminsRepositories.getInstance();
const deleteAdminUseCase = new DeleteAdminUseCase(adminsRepositories);
const deleteAdminController = new DeleteAdminController(deleteAdminUseCase);

export { deleteAdminController };
