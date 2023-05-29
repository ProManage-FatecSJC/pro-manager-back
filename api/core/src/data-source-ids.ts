import { DataSource } from "typeorm";
import 'dotenv/config'

export const AppDataSourceIds = new DataSource({
    type: 'postgres',
    password: process.env.DB_PASS_IDS,
    name: process.env.DB_NAME_IDS,
    url: process.env.DB_URL_IDS,
    entities: [`${__dirname}/**/entitiesIds/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrationsIds/*.{ts,js}`],
})