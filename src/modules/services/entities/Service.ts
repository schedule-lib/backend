import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("services")
class Service {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  agency_owner: string;

  @Column()
  addresses: string;

  @Column()
  months: string;

  @Column()
  days: string;

  @Column()
  start_hour: string;

  @Column()
  end_hour: string;

  @Column()
  total_people: number;

  @Column()
  scheduling_times: string;

  @Column()
  janeiro: string;

  @Column()
  fevereiro: string;

  @Column()
  marco: string;

  @Column()
  abril: string;

  @Column()
  maio: string;

  @Column()
  junho: string;

  @Column()
  julho: string;

  @Column()
  agosto: string;

  @Column()
  setembro: string;

  @Column()
  outubro: string;

  @Column()
  novembro: string;

  @Column()
  dezembro: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Service };
