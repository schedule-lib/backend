import { getRepository, Repository } from "typeorm";

import { ICreateServiceDTO } from "@modules/services/dtos/ICreateServiceDTO";
import { Service } from "@modules/services/entities/Service";

import { IServicesRepository } from "../IServicesRepository";

class ServicesRepository implements IServicesRepository {
  private repository: Repository<Service>;

  constructor() {
    this.repository = getRepository(Service);
  }

  async create(data: ICreateServiceDTO): Promise<void> {
    const service = this.repository.create({
      id: data.id,
      name: data.name,
      agency_owner: data.agency_owner,
      addresses: data.addresses,
      months: data.months,
      start_hours: data.start_hours,
      end_hours: data.end_hours,
      on_weekends: data.on_weekends,
      total_people: data.total_people,
      schedule: data.schedule,
      scheduled_today: data.scheduled_today,
      date_months: data.date_months,
    });

    await this.repository.save(service);
  }
  async list(): Promise<Service[]> {
    return this.repository.find();
  }
  async findById(id: string): Promise<Service> {
    return this.repository.findOne(id);
  }
  async findByName(name: string): Promise<Service> {
    return this.repository.findOne({
      where: { name },
    });
  }

  async findByAgency(agency: string): Promise<Service[]> {
    return this.repository.find({
      where: {
        agency_owner: agency,
      },
    });
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async updatePeople(id: number): Promise<void> {
    await this.repository.findOne(id);
  }
}

export { ServicesRepository };
