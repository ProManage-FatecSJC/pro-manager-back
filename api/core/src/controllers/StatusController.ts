import { Request, Response } from "express";
import { StatusRepository } from "../repositories/StatusRepository";

export class StatusController {

    public async getStatus(req: Request, res: Response){
        try {
            return res.status(200).json(await StatusRepository.find({
                relations: {
                    partner: true
                }
            }))
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'Falha ao buscar status'})
        }
    }

    public async deleteStatus(req: Request, res: Response){
        const { id } = req.params
        try {
            const status = await StatusRepository.findOneByOrFail({
                id: id
            })
            return res.status(200).json(await StatusRepository.delete(status))
        } catch (error) {
            return res.status(400).json({ message: 'Falha ao deletar status'})
        }
    }
}