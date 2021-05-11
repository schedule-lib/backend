import { DeleteResult } from "typeorm";

import { ICreateAdminDTO } from "../dtos/ICreateAdminDTO";
import { Admin } from "../entities/Admin";

interface IAdminsRepositories {
  create({ name, email, password }: ICreateAdminDTO): Promise<void>;
  list(): Promise<Admin[]>;
  findByEmail(email: string): Promise<Admin>;
  findById(id: string): Promise<Admin>;
  delete(email: string): Promise<DeleteResult>;
}

export { IAdminsRepositories };
