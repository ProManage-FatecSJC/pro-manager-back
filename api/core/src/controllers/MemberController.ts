import { Request, Response } from "express";
import MemberUpdateDto from "../dtos/members/MemberUpdateDto";
import { MemberRepository } from "../repositories/MemberRepository";
import { request } from "http";
import { MemberCreateDto } from "../dtos/members/MemberCreateDto";
import { Member } from "../entities/Member";
import { Address } from "../entities/Address";
import { AddressRepository } from "../repositories/AddressRepository";

export class MemberController {

    public async getMembers(req: Request, res: Response) {
        try {
            return res.status(200).json(await MemberRepository.find({
                relations: {
                    partner: true
                }
            }))
        } catch (error) {
            return res.status(400).json({message: "Erro ao resgatar membros"})
        }
    }

    public async getMembersByPartner(req: Request, res: Response){
        const { id } = req.params
        try {
            return res.status(200).json(await MemberRepository.findBy({
                partner: {
                    id: id
                }
            }))
        } catch (error) {
            return res.status(400).json({message: "Erro ao resgatar membros"})
        }
    }

    public async createMember(req: Request, res: Response) {
        const memberCreateDto: MemberCreateDto = req.body
        try {
            const address: Address = memberCreateDto.address
            const newAddress = await AddressRepository.save(address)

            const newMember = MemberRepository.create(memberCreateDto)
            newMember.address = newAddress
            return res.status(200).json(await MemberRepository.save(newMember))
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: "Erro ao criar membro"})
        }
    }

    public async updateMember(req: Request, res: Response) {

        const { id } = req.params

        try {
            let memberUpdate: MemberUpdateDto = req.body
            let member = MemberRepository.create(memberUpdate)
            member.id = id
            
            return res.status(200).json(await MemberRepository.save(member))
        } catch (error) {
            return res.status(400).json({message: "Erro ao atualizar membro"})
        }
    }

    public async archiveMember(req: Request, res: Response) {

        const { id } = req.params

        try {
            const member = await MemberRepository.findOneBy({
                id: id
            })

            if(member == null)
                return res.status(400).json({ message: "Erro ao arquivar membro"})

            member.isArchived = true
            return res.status(200).json(await MemberRepository.save(member))
        } catch (error) {
            return res.status(400).json({message: "Erro ao arquivar membro"})
        }
    }
}