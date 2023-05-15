import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681660658054 implements MigrationInterface {
    name = 'default1681660658054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "statuses" RENAME COLUMN "toSing" TO "toSign"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "statuses" RENAME COLUMN "toSign" TO "toSing"`);
    }

}
