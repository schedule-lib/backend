import { Scheduled } from "../entities/Scheduled";

export type createScheduledDTO = {
  id?: string;
  code: string;
  username: string;
  service: string;
  point: string;
  phone_number: string;
  province: string;
  date: string;
  hour: string;
  created_at?: string;
};

interface IScheduledRepository {
  create(data: createScheduledDTO): Promise<void>;
  findByCode(code: string): Promise<Scheduled[]>;
}

export { IScheduledRepository };
