import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSchedyled1622321697806 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "scheduled",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "code", type: "varchar" },
          { name: "service", type: "varchar" },
          { name: "username", type: "varchar" },
          { name: "phone_number", type: "varchar" },
          { name: "cpf", type: "varchar" },
          { name: "point", type: "varchar" },
          { name: "province", type: "varchar" },
          { name: "date", type: "varchar" },
          { name: "hour", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("scheduled");
  }
}
