import bcrypt from 'bcryptjs';

export class UserService{

    public async EncodePassword(password: string){
        const saltRounds = 10;
        let hashedPassword;
        await bcrypt.genSalt(saltRounds).then(salt => {
            hashedPassword = bcrypt.hash(password, salt)
        })

        return hashedPassword
    }

    public async DecodePassword(password: string, hashedPassword: string){
        return await bcrypt.compare(password, hashedPassword)
    }
}