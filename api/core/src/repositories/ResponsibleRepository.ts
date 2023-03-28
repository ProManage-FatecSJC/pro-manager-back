import { AppDataSource } from "../data-source";
import { Responsible } from "../entities/Responsible";

export const ResponsibleRepository = AppDataSource.getRepository(Responsible)