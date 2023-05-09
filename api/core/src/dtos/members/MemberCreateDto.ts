import { Address } from "../../entities/Address"
import { Partner } from "../../entities/Partner"
import { Responsible } from "../../entities/Responsible"

export class MemberCreateDto {

    name: string

    trade_name: string

    CNPJ: string

    telephone: string

    partner: Partner

    address: Address

    responsible: Responsible
}