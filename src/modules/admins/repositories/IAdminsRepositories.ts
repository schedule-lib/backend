import { ICreateAdminDTO } from "../dtos/ICreateAdminDTO";
import { Admin } from "../entities/Admin";

interface IAdminsRepositories {
  create({ name, email, password }: ICreateAdminDTO): void;
  list(): Admin[];
  fundByEmail(email: string): Admin;
  delete(email: string): Admin[];
}

export { IAdminsRepositories };
