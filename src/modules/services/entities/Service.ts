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
  start_hours: string;

  @Column()
  end_hours: string;

  @Column()
  on_weekends: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Service };
