import { AppDataSource } from "../data-source";
import { Status } from "../entities/Status";

export const StatusRepository = AppDataSource.getRepository(Status).extend({
    async getByPartner(partnerId: string): Promise<Status | null>{
        const allStatus = await this.find({
            relations: {
                partner: true
            }
        })

        const filteredStatus = allStatus.filter(x => x.partner != null)
        const selectedStatus = filteredStatus.find(x => x.partner.id == partnerId)

        if (selectedStatus) return selectedStatus
        return null
    }
})