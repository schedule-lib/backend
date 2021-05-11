import { ICreateServiceDTO } from "../dtos/ICreateServiceDTO";
import { Service } from "../entities/Service";

interface IServicesRepository {
  create({ name }: ICreateServiceDTO): Promise<void>;
  list(): Promise<Service[]>;
  findById(id: string): Promise<Service>;
  delete(id: string): Promise<void>;
}

export { IServicesRepository };
