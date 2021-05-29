import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("scheduled")
class Scheduled {
  @PrimaryColumn()
  id?: string;

  @Column()
  code: string;

  @Column()
  username: string;

  @Column()
  service: string;

  @Column()
  point: string;

  @Column()
  province: string;

  @Column()
  phone_number: string;

  @Column()
  date: string;

  @Column()
  hour: string;

  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Scheduled };
