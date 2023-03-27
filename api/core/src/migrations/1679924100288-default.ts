import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679924100288 implements MigrationInterface {
    name = 'default1679924100288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "statuses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "em_prospectation" date NOT NULL, "first_contact" date NOT NULL, "first_meeting" date NOT NULL, "doc_sent" date NOT NULL, "doc_return_Academy" date NOT NULL, "doc_return" date NOT NULL, "doc_return_analise" date NOT NULL, "preparation_ES" date NOT NULL, "analise_ES" date NOT NULL, "analise_ES_Academy" date NOT NULL, "toSing" date NOT NULL, "partnership_signed" date NOT NULL, CONSTRAINT "PK_2fd3770acdb67736f1a3e3d5399" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "statuses"`);
    }

}
