import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681664590089 implements MigrationInterface {
    name = 'default1681664590089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" ADD "status_id" uuid`);
        await queryRunner.query(`ALTER TABLE "partners" ADD CONSTRAINT "UQ_763c222faf1fe588c07ba1b6ec2" UNIQUE ("status_id")`);
        await queryRunner.query(`ALTER TABLE "partners" ADD CONSTRAINT "FK_763c222faf1fe588c07ba1b6ec2" FOREIGN KEY ("status_id") REFERENCES "statuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners" DROP CONSTRAINT "FK_763c222faf1fe588c07ba1b6ec2"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP CONSTRAINT "UQ_763c222faf1fe588c07ba1b6ec2"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP COLUMN "status_id"`);
    }

}
