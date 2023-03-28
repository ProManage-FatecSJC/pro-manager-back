import { Request, Response } from "express";
import { LoginDto } from "../dtos/users/loginDto";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import { UserUpdateDto } from "../dtos/users/userUpdateDto";
import { TokenDto } from "../dtos/users/tokenDto";
import { ERole } from "../enum/ERole";
import { Users } from "../entities/User";
import { UserReadDto } from "../dtos/users/userReadDto";

export class UserController {

    public async getUsers(req: Request, res: Response){
        try {
            const users: Users = await UserRepository.find()
            const usersReadDto: UserReadDto[] = users.map(user => {
                const userReadDto = new UserReadDto()
                userReadDto.id = user.id
                userReadDto.name = user.name
                userReadDto.email = user.email
                userReadDto.role = user.role
                return userReadDto
            })

            return res.status(200).json(usersReadDto)
        } catch (error) {
            return res.status(400).json({message: "Falha ao buscar usuários"})
        }
    }

    public async registerUser(req: Request, res: Response){

        //let header = req.headers.authorization as string
        const userService = new UserService()
        try {
            //const userData: JwtPayload = userService.GetUserData(header)
            //if(userData.role != "ADMIN") return res.status(403).json({ message: "Não autorizado"})

            req.body.password = await userService.EncodePassword(req.body.password)
            const user = UserRepository.create(req.body)
            return res.status(200).json(await UserRepository.save(user))
        } catch (error) {
            return res.status(400).json({message: "Falha ao cadastrar usuário"})
        }
    }

    public async updateUser(req: Request, res: Response){

        const { id } = req.params
        const userService = new UserService()
        try {
            const encodedPassword: string = await userService.EncodePassword(req.body.password)

            const userUpdate: UserUpdateDto = req.body
            const user = UserRepository.create(userUpdate)
            
            user.password = encodedPassword
            user.id = id
            
            return res.status(200).json(await UserRepository.save(user))
        } catch (error) {
            return res.status(400).json({message: ""})
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

            let tokenDto: TokenDto = {
                id: user.id,
                name: user.name,
                role: user.role
            }
            const secret = process.env.TOKEN_SECRET as string
            const token = jwt.sign(tokenDto, secret, {expiresIn: '3h'})

            return res.status(200).json({token: token})

        } catch (error) {
            console.log(error)
            return res.status(400).json({message: "Falha ao efetuar login"})
        }
    }
    
    public async deleteUsers(req: Request, res: Response){
        const { id } = req.params
        try {
            return res.status(200).json(await UserRepository.delete(id))
        } catch (error) {
            return res.status(400).json({message: "Falha ao deletar usuário"})
        }
    }
}