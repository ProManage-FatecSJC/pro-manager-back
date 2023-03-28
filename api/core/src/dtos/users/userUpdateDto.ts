import { ERole } from "../../enum/ERole"

export class UserUpdateDto {
    name: string
    email: string
    password: string
    role: ERole
}