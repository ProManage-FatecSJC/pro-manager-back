import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680480305373 implements MigrationInterface {
    name = 'default1680480305373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" RENAME COLUMN "classification" TO "privacy"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" RENAME COLUMN "privacy" TO "classification"`);
    }

}
