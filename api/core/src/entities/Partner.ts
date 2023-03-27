import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Address } from "./Address"
import { Responsible } from "./Responsible"
import { Member } from "./Member"
import { Status } from "./Status"

@Entity('partners')
export class Partner {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'text'})
    name: string

    @Column({ type: 'text'})
    trade_name: string

    @Column({ type: 'text'})
    CNPJ: string

    @Column({ type: 'int'})
    classification: number

    @Column({ type: 'text'})
    telephone: string

    @Column({ type: 'text'})
    status: Status

    @Column({ type: 'text'})
    observation: string

    @OneToOne(() => Address)
    @JoinColumn({name: 'partner_address_id'})
    address: Address

    @OneToOne(() => Responsible)
    @JoinColumn({name: 'partner_responsible_id'})
    responsible: Responsible

    @OneToMany(() => Member, (member) => member.partner)
    @JoinColumn({name: 'member_id'})
    members: Member[]
}