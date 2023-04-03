import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Address } from "./Address"
import { Responsible } from "./Responsible"
import { Member } from "./Member"
import { Status } from "./Status"
import { EStatus } from "../enum/EStatus"
import { EPrivacy } from "../enum/EPrivacy"
import { EType } from "../enum/EType"

@Entity('partners')
export class Partner {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'text'})
    name: string

    @Column({ type: 'int'})
    privacy: EPrivacy //public or private (0 / 1)

    @Column({ type: 'int'})
    type: EType //unique or multiple (0 / 1)

    @Column({ type: 'int'})
    membersQuantity: number

    @Column({ type: 'text'})
    telephone: string

    @Column({ type: 'int'})
    status: EStatus

    @Column({ type: 'text'})
    state: string

    @Column({type: 'text'})
    intermediateResponsible: string

    @OneToOne(() => Responsible)
    @JoinColumn({name: 'partner_responsible_id'})
    responsible: Responsible

    @OneToMany(() => Member, (member) => member.partner)
    @JoinColumn({name: 'member_id'})
    members: Member[]

    // @Column({ type: 'text'})
    // trade_name: string

    // @Column({ type: 'text'})
    // CNPJ: string

    // @Column({ type: 'text'})
    // observation: string

    // @OneToOne(() => Address)
    // @JoinColumn({name: 'partner_address_id'})
    // address: Address
}