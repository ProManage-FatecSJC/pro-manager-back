import { Request, Response } from "express";
import { PartnerUpdateDto } from "../dtos/partners/PartnerUpdateDto";
import { PartnerRepository } from "../repositories/PartnerRepository";
import { PartnerService } from "../services/PartnerService";
import { JwtPayload } from "jsonwebtoken";
import { UserService } from "../services/UserService";
import { StatusService } from "../services/StatusService";
import { Partner } from "../entities/Partner";
import { PartnerCreateDto } from "../dtos/partners/PartnerCreateDto";
import { PartnerFiltroDto } from "../dtos/partners/PartnerFiltroDto";

export class PartnerController {

    public async getPartners(req: Request, res: Response){
        try {
            return res.status(200).json(await PartnerRepository.find())
        } catch (error) {
            return res.status(400).json({message: "Erro ao resgatar parceiros."})
        }
    }

    public async getPartnersByFiltro(req: Request, res: Response){
        const  filtro = req.body as PartnerFiltroDto

        try {
            return res.status(200).json(await PartnerRepository.findByFiltro(filtro))
        } catch (error) {
            return res.status(400).json({ message: 'Ocorreu um erro ao filtrar parceiros.'})
        }
    }

    public async createPartner(req: Request, res: Response){

        let header = req.headers.authorization as string
        const partnerDto: PartnerCreateDto = req.body
        const userService = new UserService()
        const statusService = new StatusService()
        try {
            const userData: JwtPayload = userService.GetUserData(header)
            if(userData.role != 0) return res.status(403).json({ message: "Não autorizado"})
            const newPartner = PartnerRepository.create(partnerDto)
            console.log('AAAAAAAAA ', newPartner)
            const partner = await PartnerRepository.save(newPartner)
            await statusService.CriaStatus(newPartner.status, partner)
            return res.status(200).json(partner)
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: "Erro ao cadastrar parceiro."})
        }
    }

    public async updatePartner(req: Request, res: Response){

        const { id } = req.params
        const statusService = new StatusService()
        try {
            let partnerUpdate : PartnerUpdateDto = req.body
            let partner = PartnerRepository.create(partnerUpdate)
            partner.id = id

            await statusService.salvaStatus(partner)
            return res.status(200).json(await PartnerRepository.save(partner))
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: "Erro ao atualizar parceiro."})
        }
    }

    public async archivePartner(req: Request, res: Response){

        const { id } = req.params

        try {
            const partner = await PartnerRepository.findOneBy({
                id: id
            })

            if (partner != null) {
                partner.isArchived = true
                return res.status(200).json(await PartnerRepository.save(partner))
            }
            return res.status(400).json({message: "Erro ao arquivar parceiro."}) 
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: "Erro ao arquivar parceiro."})
        }
    }
}