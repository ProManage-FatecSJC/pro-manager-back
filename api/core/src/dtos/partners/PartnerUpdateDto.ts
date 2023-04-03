import { Status } from "../../entities/Status"
import { EPrivacy } from "../../enum/EPrivacy"
import { EStatus } from "../../enum/EStatus"
import { EType } from "../../enum/EType"

export class PartnerUpdateDto {
    name: string

    privacy: EPrivacy

    type: EType

    membersQuantity: number

    telephone: string

    status: EStatus

    state: string

    intermediateResponsible: string
}