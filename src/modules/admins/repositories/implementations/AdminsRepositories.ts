import { DeleteResult, getRepository, Repository } from "typeorm";

import { ICreateAdminDTO } from "../../dtos/ICreateAdminDTO";
import { Admin } from "../../entities/Admin";
import { IAdminsRepositories } from "../IAdminsRepositories";

class AdminsRepositories implements IAdminsRepositories {
  private repository: Repository<Admin>;

  constructor() {
    this.repository = getRepository(Admin);
  }

  async create({ name, email, password }: ICreateAdminDTO): Promise<void> {
    const admin = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(admin);
  }

  async list(): Promise<Admin[]> {
    return this.repository.find({
      where: {
        name: "elias",
      },
    });
  }

  async findByEmail(email: string): Promise<Admin> {
    const admin = await this.repository.findOne({
      where: {
        email,
      },
    });

    return admin;
  }

  async findById(id: string): Promise<Admin> {
    const admin = await this.repository.findOne(id);

    return admin;
  }

  async delete(email: string): Promise<DeleteResult> {
    const adminPosition = this.repository.delete(email);

    return adminPosition;
  }
}

export { AdminsRepositories };
