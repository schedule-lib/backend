import { ICreateServiceDTO } from "../dtos/ICreateServiceDTO";
import { Service } from "../entities/Service";

interface IServicesRepository {
  create(data: ICreateServiceDTO): Promise<void>;
  list(): Promise<Service[]>;
  findById(id: string): Promise<Service>;
  findByName(name: string): Promise<Service>;
  findByAgency(agency: string): Promise<Service[]>;
  delete(id: string): Promise<void>;
}

export { IServicesRepository };
