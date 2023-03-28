import { Request, Response } from "express";
import { CreateResponsibleDto } from "../dtos/responsible/createResponsibleDto";
import { UpdateResponsibleDto } from "../dtos/responsible/updateResponsibleDto";
import { ResponsibleRepository } from "../repositories/ResponsibleRepository";

export class ResponsibleController {

    public async createResponsible(req: Request, res: Response){
        try {
            const responsibleDto: CreateResponsibleDto = req.body
            const responsible = ResponsibleRepository.create(responsibleDto)
            return res.status(200).json(await ResponsibleRepository.save(responsible))
        } catch (error) {
            return res.status(400).json({message: "Falha ao cadastrar responsável"})
        }
    }

    public async updateResponsible(req: Request, res: Response){

        const { id } = req.params
        try {
            const responsibleDto: UpdateResponsibleDto = req.body
            let responsible = ResponsibleRepository.create(responsibleDto)
            responsible.id = id
            return res.status(200).json(await ResponsibleRepository.save(responsible))
        } catch (error) {
            return res.status(400).json({message: "Falha ao atualizar responsável"})
        }
    }
}