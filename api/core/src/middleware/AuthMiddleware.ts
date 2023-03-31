import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-errors";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserRepository } from "../repositories/UserRepository";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const {authorization} = req.headers

        if (!authorization){
            return res.status(401).json({message: "Não autorizado"})
        }

        const token = authorization.split(' ')[1]

        const userVerification = jwt.verify(token, process.env.TOKEN_SECRET ?? '') as JwtPayload

        let id = userVerification.id

        const user = await UserRepository.findOneBy({id})

        if (!user){
            return res.status(401).json({message: "Não autorizado"})
        }

        next()
}