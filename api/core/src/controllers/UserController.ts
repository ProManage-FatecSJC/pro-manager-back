import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export class UserController {

    public async registerUser(req: Request, res: Response){
        try {
            let user = UserRepository.create(req.body)
            return res.status(200).json(await UserRepository.save(user))
        } catch (error) {
            return res.status(400).json({message: "Falha ao cadastrar usuário"})
        }
    }
}