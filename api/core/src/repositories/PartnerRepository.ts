import { AppDataSource } from "../data-source";
import { Partner } from "../entities/Partner";

export const PartnerRepository = AppDataSource.getRepository(Partner).extend({
    async findByStatus(status: number){
        try {
            return await this.findBy({
                status: status
            })
        } catch (error) {
            return error
        }
    }
})