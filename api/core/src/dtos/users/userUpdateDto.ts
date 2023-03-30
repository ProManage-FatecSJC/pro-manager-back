import { ERole } from "../../enum/ERole"

export class UserDto {
    name: string
    email: string
    password: string
    role: ERole
}