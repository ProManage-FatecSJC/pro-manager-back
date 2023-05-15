import { AppDataSource } from "../data-source";
import { Address } from "../entities/Address";

export const AddressRepository = AppDataSource.getRepository(Address)