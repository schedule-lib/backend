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
            type: "text",
          },
          {
            name: "fevereiro",
            type: "text",
          },
          {
            name: "marco",
            type: "text",
          },
          {
            name: "abril",
            type: "text",
          },
          {
            name: "maio",
            type: "text",
          },
          {
            name: "junho",
            type: "text",
          },
          {
            name: "julho",
            type: "text",
          },
          {
            name: "agosto",
            type: "text",
          },
          {
            name: "setembro",
            type: "text",
          },
          {
            name: "outubro",
            type: "text",
          },
          {
            name: "novembro",
            type: "text",
          },
          {
            name: "dezembro",
            type: "text",
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
