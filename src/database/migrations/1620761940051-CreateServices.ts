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
            name: "required_field",
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
            name: "start_hours",
            type: "varchar",
          },

          {
            name: "end_hours",
            type: "varchar",
          },

          {
            name: "on_weekends",
            type: "boolean",
            default: false,
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
