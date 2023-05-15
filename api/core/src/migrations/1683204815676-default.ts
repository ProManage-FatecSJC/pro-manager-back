import { MigrationInterface, QueryRunner } from "typeorm";

export class default1683204815676 implements MigrationInterface {
    name = 'default1683204815676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" ADD "isArchived" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "isArchived"`);
    }

}
