import { AppDataSource } from "../data-source";
import { Partner } from "../entities/Partner";

export const PartnerRepository = AppDataSource.getRepository(Partner) 