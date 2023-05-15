import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680451899948 implements MigrationInterface {
    name = 'default1680451899948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" DROP CONSTRAINT "FK_3ae70af74df4300f63304f5983d"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "trade_name"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "CNPJ"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "observation"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP CONSTRAINT "REL_3ae70af74df4300f63304f5983"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "partner_address_id"`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "type" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "membersQuantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "state" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "intermediateResponsible" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "status" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "status" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "intermediateResponsible"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "membersQuantity"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "partner_address_id" uuid`);
        await queryRunner.query(`ALTER TABLE "partners" ADD CONSTRAINT "REL_3ae70af74df4300f63304f5983" UNIQUE ("partner_address_id")`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "observation" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "CNPJ" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partners" ADD "trade_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partners" ADD CONSTRAINT "FK_3ae70af74df4300f63304f5983d" FOREIGN KEY ("partner_address_id") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
