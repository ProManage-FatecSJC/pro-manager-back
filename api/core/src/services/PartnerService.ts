import { PartnerUpdateDto } from "../dtos/partners/PartnerUpdateDto"
import { Partner } from "../entities/Partner"
import { PartnerRepository } from "../repositories/PartnerRepository"

export class PartnerService {

    public async getPartners() {
        await PartnerRepository.find()
    }

    public async createPartner(partner: Partner){
        const newPartner = PartnerRepository.create(partner)
        return await PartnerRepository.save(newPartner)
    }

    public async updatePartner(partnerUpdate: PartnerUpdateDto, id: string){
        
        return PartnerRepository.save({id, partnerUpdate})
    }
}