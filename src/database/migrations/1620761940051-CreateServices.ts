import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServices1620761940051 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "services",

        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },

          {
            name: "name",
            type: "varchar",
          },

          {
            name: "agency_owner",
            type: "varchar",
          },

          {
            name: "addresses",
            type: "varchar",
          },

          {
            name: "months",
            type: "varchar",
          },

          {
            name: "days",
            type: "varchar",
          },

          {
            name: "start_hour",
            type: "varchar",
          },

          {
            name: "end_hour",
            type: "varchar",
          },

          {
            name: "total_people",
            type: "numeric",
            default: 1,
          },

          {
            name: "scheduling_times",
            type: "text",
          },

          {
            name: "janeiro",
            type: "varchar",
          },
          {
            name: "fevereiro",
            type: "varchar",
          },
          {
            name: "marco",
            type: "varchar",
          },
          {
            name: "abril",
            type: "varchar",
          },
          {
            name: "maio",
            type: "varchar",
          },
          {
            name: "junho",
            type: "varchar",
          },
          {
            name: "julho",
            type: "varchar",
          },
          {
            name: "agosto",
            type: "varchar",
          },
          {
            name: "setembro",
            type: "varchar",
          },
          {
            name: "outubro",
            type: "varchar",
          },
          {
            name: "novembro",
            type: "varchar",
          },
          {
            name: "dezembro",
            type: "varchar",
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("services");
  }
}
