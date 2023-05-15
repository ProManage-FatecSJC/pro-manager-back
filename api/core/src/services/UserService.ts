import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';

export class UserService{

    public async EncodePassword(password: string): Promise<string>{
        const saltRounds = 10;
        let hashedPassword = '';
        await bcrypt.genSalt(saltRounds).then(async salt => {
            hashedPassword = await bcrypt.hash(password, salt)
        })

        return hashedPassword
    }

    public async DecodePassword(password: string, hashedPassword: string){
        return await bcrypt.compare(password, hashedPassword)
    }

    public GetUserData(token: string){
        const secret = process.env.TOKEN_SECRET as string
        token = token?.split(' ')[1]
        return jwt.verify(token, secret) as JwtPayload
    }
}