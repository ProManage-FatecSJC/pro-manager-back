import { Contact } from "../../entities/Contact"

export class CreateResponsibleDto {
    name: string
    CPF: string
    unit: string
    contacts: Contact[]
}