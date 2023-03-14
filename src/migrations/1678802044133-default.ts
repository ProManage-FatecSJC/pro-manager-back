import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678802044133 implements MigrationInterface {
    name = 'default1678802044133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "contacts_responsible_id_fkey"`);
        await queryRunner.query(`CREATE TABLE "partners" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "trade_name" text NOT NULL, "CNPJ" text NOT NULL, "classification" integer NOT NULL, "telephone" text NOT NULL, "status" text NOT NULL, "observation" text NOT NULL, "partner_address_id" uuid, "partner_responsible_id" uuid, CONSTRAINT "REL_3ae70af74df4300f63304f5983" UNIQUE ("partner_address_id"), CONSTRAINT "REL_ea46378f691034bd1cd130ad08" UNIQUE ("partner_responsible_id"), CONSTRAINT "PK_998645b20820e4ab99aeae03b41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "members" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "trade_name" text NOT NULL, "CNPJ" text NOT NULL, "telephone" text NOT NULL, "partnerId" uuid, "member_address_id" uuid, "member_responsible_id" uuid, CONSTRAINT "REL_6bb1e48cfef01bed5a81789ca5" UNIQUE ("member_address_id"), CONSTRAINT "REL_cd016086efc62b3aeeaadd57c3" UNIQUE ("member_responsible_id"), CONSTRAINT "PK_28b53062261b996d9c99fa12404" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "responsibles" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "responsibles" ADD "CPF" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD "CEP" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "responsibles" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "responsibles" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "responsibles" ALTER COLUMN "unit" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "street" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "complement" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "state" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_45fa0c2ad6be90230c383e26bd6" FOREIGN KEY ("responsible_id") REFERENCES "responsibles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partners" ADD CONSTRAINT "FK_3ae70af74df4300f63304f5983d" FOREIGN KEY ("partner_address_id") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partners" ADD CONSTRAINT "FK_ea46378f691034bd1cd130ad087" FOREIGN KEY ("partner_responsible_id") REFERENCES "responsibles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "members" ADD CONSTRAINT "FK_d41b8cb773eb6461bf952dc3409" FOREIGN KEY ("partnerId") REFERENCES "partners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "members" ADD CONSTRAINT "FK_6bb1e48cfef01bed5a81789ca54" FOREIGN KEY ("member_address_id") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "members" ADD CONSTRAINT "FK_cd016086efc62b3aeeaadd57c30" FOREIGN KEY ("member_responsible_id") REFERENCES "responsibles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "members" DROP CONSTRAINT "FK_cd016086efc62b3aeeaadd57c30"`);
        await queryRunner.query(`ALTER TABLE "members" DROP CONSTRAINT "FK_6bb1e48cfef01bed5a81789ca54"`);
        await queryRunner.query(`ALTER TABLE "members" DROP CONSTRAINT "FK_d41b8cb773eb6461bf952dc3409"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP CONSTRAINT "FK_ea46378f691034bd1cd130ad087"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP CONSTRAINT "FK_3ae70af74df4300f63304f5983d"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_45fa0c2ad6be90230c383e26bd6"`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "state" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "complement" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "street" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "responsibles" ALTER COLUMN "unit" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "responsibles" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "responsibles" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "CEP"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "responsibles" DROP COLUMN "CPF"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD "cep" text`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" text`);
        await queryRunner.query(`ALTER TABLE "responsibles" ADD "cpf" text`);
        await queryRunner.query(`DROP TABLE "members"`);
        await queryRunner.query(`DROP TABLE "partners"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "contacts_responsible_id_fkey" FOREIGN KEY ("responsible_id") REFERENCES "responsibles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
