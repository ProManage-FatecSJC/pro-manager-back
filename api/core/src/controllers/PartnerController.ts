import { Request, Response } from "express";
import { PartnerUpdateDto } from "../dtos/partners/PartnerUpdateDto";
import { PartnerRepository } from "../repositories/PartnerRepository";
import { PartnerService } from "../services/PartnerService";

export class PartnerController {

    public async getPartners(req: Request, res: Response){
        try {
            return res.status(200).json(await PartnerRepository.find())
        } catch (error) {
            return res.status(400).json({message: "Erro ao resgatar parceiros."})
        }
    }

    public async createPartner(req: Request, res: Response){
        try {
            const newPartner = PartnerRepository.create(req.body)
            return res.status(200).json(await PartnerRepository.save(newPartner))
        } catch (error) {
            return res.status(400).json({message: "Erro ao cadastrar parceiro."})
        }
    }

    public async updatePartner(req: Request, res: Response){

        const { id } = req.params

        try {
            let partnerUpdate : PartnerUpdateDto = req.body
            let partner = PartnerRepository.create(partnerUpdate)
            partner.id = id

            return res.status(200).json(await PartnerRepository.save(partner))
        } catch (error) {
            return res.status(400).json({message: "Erro ao atualizar parceiro."})
        }
    }

    public async deletePartner(req: Request, res: Response){

        const { id } = req.params

        try {
            const partner = await PartnerRepository.findOneByOrFail({
                id: id
            })
            return res.status(200).json(await PartnerRepository.delete(partner))
        } catch (error) {
            return res.status(400).json({message: "Erro ao deletar parceiro."})
        }
    }
}