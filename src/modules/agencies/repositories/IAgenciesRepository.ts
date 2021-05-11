import { ICreateAgencyDTO } from "../dtos/ICreateAgencyDTO";
import { Agency } from "../entities/Agency";

interface IAgenciesRepository {
  /**
   * will create a new agency member
   * @param name the name of the agency
   * @param email the email/indentification of the agency
   * @param password the secrete word to loggin
   */
  create({ name, email, password }: ICreateAgencyDTO): Promise<void>;

  /**
   * will list all agencies created
   * @return list with all entities/agencies
   */
  list(): Promise<Agency[]>;

  /**
   * will return position of the agency in list
   * @param email the email/indentification of the agency
   * @return id of the agency
   */
  findByEmail(email: string): Promise<Agency>;

  /**
   * will remove an agency in list
   * @param email the email/indentification of the agency
   * @return all data of entitie/agency removed
   */
  delete(email: string): Promise<void>;
}

export { IAgenciesRepository };
