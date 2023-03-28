import { Status } from "../../entities/Status"

export class PartnerUpdateDto {
    name: string

    trade_name: string

    CNPJ: string

    classification: number

    telephone: string

    status: Status

    observation: string
}