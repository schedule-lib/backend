import { getRepository, Repository } from "typeorm";

import { ICreateServiceDTO } from "@modules/services/dtos/ICreateServiceDTO";
import { Service } from "@modules/services/entities/Service";

import { IServicesRepository } from "../IServicesRepository";

class ServicesRepository implements IServicesRepository {
  private repository: Repository<Service>;

  constructor() {
    this.repository = getRepository(Service);
  }

  async create({
    janeiro,
    fevereiro,
    marco,
    abril,
    maio,
    junho,
    julho,
    agosto,
    setembro,
    outubro,
    novembro,
    dezembro,
    ...data
  }: ICreateServiceDTO): Promise<void> {
    const service = this.repository.create({
      id: data.id,
      name: data.name,
      agency_owner: data.agency_owner,
      addresses: data.addresses,
      months: data.months,
      days: data.days,
      start_hour: data.start_hour,
      end_hour: data.end_hour,
      total_people: data.total_people,
      scheduling_times: data.scheduling_times,
      janeiro,
      fevereiro,
      marco,
      abril,
      maio,
      junho,
      julho,
      agosto,
      setembro,
      outubro,
      novembro,
      dezembro,
    });

    await this.repository.save(service);
  }

  async list(): Promise<Service[]> {
    const services = (await this.repository.find()).map((service) => {
      return Object.assign(service, {
        addresses: JSON.parse(service.addresses),
        months: JSON.parse(service.months),
        days: JSON.parse(service.days),
        scheduling_times: JSON.parse(service.scheduling_times),
        janeiro: JSON.parse(service.janeiro),
        fevereiro: JSON.parse(service.fevereiro),
        marco: JSON.parse(service.marco),
        abril: JSON.parse(service.abril),
        maio: JSON.parse(service.maio),
        junho: JSON.parse(service.junho),
        julho: JSON.parse(service.julho),
        agosto: JSON.parse(service.agosto),
        setembro: JSON.parse(service.setembro),
        outubro: JSON.parse(service.outubro),
        novembro: JSON.parse(service.novembro),
        dezembro: JSON.parse(service.dezembro),
      });
    });

    return services;
  }

  async findById(id: string): Promise<Service> {
    return this.repository.findOne(id);
  }

  async findByName(name: string): Promise<Service> {
    const service = await this.repository.findOne({ name });

    Object.assign(service, {
      addresses: JSON.parse(service.addresses),
      months: JSON.parse(service.months),
      days: JSON.parse(service.days),
      scheduling_times: JSON.parse(service.scheduling_times),
      janeiro: JSON.parse(service.janeiro),
      fevereiro: JSON.parse(service.fevereiro),
      marco: JSON.parse(service.marco),
      abril: JSON.parse(service.abril),
      maio: JSON.parse(service.maio),
      junho: JSON.parse(service.junho),
      julho: JSON.parse(service.julho),
      agosto: JSON.parse(service.agosto),
      setembro: JSON.parse(service.setembro),
      outubro: JSON.parse(service.outubro),
      novembro: JSON.parse(service.novembro),
      dezembro: JSON.parse(service.dezembro),
    });

    return service;
  }

  async findByAgency(agency: string): Promise<Service[]> {
    const services = (await this.repository.find({ agency_owner: agency })).map(
      (service) => {
        return Object.assign(service, {
          addresses: JSON.parse(service.addresses),
          months: JSON.parse(service.months),
          days: JSON.parse(service.days),
          scheduling_times: JSON.parse(service.scheduling_times),
          janeiro: JSON.parse(service.janeiro),
          fevereiro: JSON.parse(service.fevereiro),
          marco: JSON.parse(service.marco),
          abril: JSON.parse(service.abril),
          maio: JSON.parse(service.maio),
          junho: JSON.parse(service.junho),
          julho: JSON.parse(service.julho),
          agosto: JSON.parse(service.agosto),
          setembro: JSON.parse(service.setembro),
          outubro: JSON.parse(service.outubro),
          novembro: JSON.parse(service.novembro),
          dezembro: JSON.parse(service.dezembro),
        });
      }
    );

    return services;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async updatePeople(id: number): Promise<void> {
    await this.repository.findOne(id);
  }
}

export { ServicesRepository };
