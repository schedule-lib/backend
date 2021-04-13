import { AdminsRepositories } from "../../repositories/implementations/AdminsRepositories";
import { ListAdminsController } from "./ListAdminsController";
import { ListAdminsUseCase } from "./ListAdminsUseCase";

const adminsRepositories = AdminsRepositories.getInstance();
const listAdminsUseCase = new ListAdminsUseCase(adminsRepositories);
const listAdminsController = new ListAdminsController(listAdminsUseCase);

export { listAdminsController };
