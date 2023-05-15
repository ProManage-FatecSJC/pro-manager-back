import { MigrationInterface, QueryRunner } from "typeorm";

export class default1683643375064 implements MigrationInterface {
    name = 'default1683643375064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" ALTER COLUMN "isArchived" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" ALTER COLUMN "isArchived" DROP DEFAULT`);
    }

}
