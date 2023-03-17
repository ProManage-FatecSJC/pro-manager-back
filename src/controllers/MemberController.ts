import { Request, Response } from "express";
import MemberUpdateDto from "../dtos/members/MemberUpdateDto";
import { MemberRepository } from "../repositories/MemberRepository";

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

    public async createMember(req: Request, res: Response) {
        try {
            const newMember = MemberRepository.create(req.body)
            return res.status(200).json(await MemberRepository.save(newMember))
        } catch (error) {
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

    public async deleteMember(req: Request, res: Response) {

        const { id } = req.params

        try {
            const member = await MemberRepository.findOneByOrFail({
                id: id
            })

            return res.status(200).json(await MemberRepository.delete(member))
        } catch (error) {
            return res.status(400).json({message: "Erro ao deletar membro"})
        }
    }
}