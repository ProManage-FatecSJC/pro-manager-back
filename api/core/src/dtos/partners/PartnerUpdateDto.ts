import { Status } from "../../entities/Status"
import { EClassification } from "../../enum/EClassification"
import { EStatus } from "../../enum/EStatus"
import { EType } from "../../enum/EType"

export class PartnerUpdateDto {
    name: string

    classification: EClassification

    type: EType

    membersQuantity: number

    telephone: string

    status: EStatus

    state: string

    intermediateResponsible: string
}