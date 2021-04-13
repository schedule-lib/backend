import { ICreateAgencyDTO } from "../dtos/ICreateAgencyDTO";
import { Agency } from "../entities/Agency";
import { AgenciesRepository } from "./implementations/AgenciesRepository";

export interface IAgenciesRepository {
  /**
   * will create a new agency member
   * @param name the name of the agency
   * @param email the email/indentification of the agency
   * @param password the secrete word to loggin
   */
  create({ name, email, password }: ICreateAgencyDTO): void;

  /**
   * will list all agencies created
   * @return list with all entities/agencies
   */
  list(): Agency[];

  /**
   * will return position of the agency in list
   * @param email the email/indentification of the agency
   * @return id of the agency
   */
  findAgencyPosition(email: string): number;

  /**
   * will remove an agency in list
   * @param email the email/indentification of the agency
   * @return all data of entitie/agency removed
   */
  delete(email: string): Agency[];
}
