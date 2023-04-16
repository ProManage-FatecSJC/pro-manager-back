import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681664075099 implements MigrationInterface {
    name = 'default1681664075099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "em_prospectation" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "first_contact" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "first_meeting" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "doc_sent" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "doc_return_Academy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "doc_return" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "doc_return_analise" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "preparation_ES" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "analise_ES" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "analise_ES_Academy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "toSign" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "partnership_signed" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "partnership_signed" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "toSign" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "analise_ES_Academy" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "analise_ES" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "preparation_ES" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "doc_return_analise" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "doc_return" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "doc_return_Academy" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "doc_sent" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "first_meeting" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "first_contact" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statuses" ALTER COLUMN "em_prospectation" SET NOT NULL`);
    }

}
