import { Contact } from "../../entities/Contact"

export class UpdateResponsibleDto{
    name: string
    CPF: string
    unit: string
    contacts: Contact[]
}