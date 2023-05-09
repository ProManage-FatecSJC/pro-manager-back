import { MigrationInterface, QueryRunner } from "typeorm";

export class default1683639140990 implements MigrationInterface {
    name = 'default1683639140990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "members" ADD "isArchived" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "members" DROP COLUMN "isArchived"`);
    }

}
