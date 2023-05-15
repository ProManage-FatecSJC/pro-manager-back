import { EPrivacy } from "../../enum/EPrivacy"
import { EStatus } from "../../enum/EStatus"
import { EType } from "../../enum/EType"

export class PartnerCreateDto {
    name: string

    privacy: EPrivacy

    type: EType

    membersQuantity: number

    telephone: string

    status: EStatus

    state: string

    intermediateResponsible: string
}