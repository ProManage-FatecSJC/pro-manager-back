import { Request, Response } from "express";
import { LoginDto } from "../dtos/users/loginDto";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";
import jwt, { Secret } from 'jsonwebtoken'

export class UserController {

    public async registerUser(req: Request, res: Response){

        const userService = new UserService()
        try {
            req.body.password = await userService.EncodePassword(req.body.password)
            const user = UserRepository.create(req.body)
            return res.status(200).json(await UserRepository.save(user))
        } catch (error) {
            return res.status(400).json({message: "Falha ao cadastrar usuário"})
        }
    }

    public async login(req: Request, res: Response) {
        
        const userService = new UserService()
        const login: LoginDto = req.body
        try {
            const user = await UserRepository.findOneBy({
                email: login.email
            })
            if(!user) return res.status(400).json({message: "Dados de cadastro incorretos."})

            const validateUser = await userService.DecodePassword(login.password, user.password)
            if(!validateUser) return res.status(400).json({message: "Dados de cadastro incorretos."})

            const secret = process.env.TOKEN_SECRET as string
            const token = jwt.sign(user, secret, {expiresIn: '3h'})

            return res.status(200).json({token: token})

        } catch (error) {
            console.log(error)
            return res.status(400).json({message: "Falha ao efetuar login"})
        }
    }
    
}