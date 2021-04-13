import { ICreateAdminDTO } from "../../dtos/ICreateAdminDTO";
import { Admin } from "../../entities/Admin";
import { IAdminsRepositories } from "../IAdminsRepositories";

class AdminsRepositories implements IAdminsRepositories {
  admins: Admin[];

  constructor() {
    this.admins = [];
  }

  create({ name, email, password }: ICreateAdminDTO): void {
    const adminObject = new Admin();
    Object.assign(adminObject, {
      name,
      email,
      password,
      created_at: new Date(),
    });

    this.admins.push(adminObject);
  }
  list(): Admin[] {
    return this.admins;
  }
  fundByEmail(email: string): Admin {
    const admin = this.admins.find((admin) => admin.email === email);
    return admin;
  }
  delete(email: string): Admin[] {
    const adminPosition = this.admins.findIndex(
      (admin) => admin.email === email
    );
    const admin = this.admins.splice(adminPosition, 1);

    return admin;
  }
}

export { AdminsRepositories };
