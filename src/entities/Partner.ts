import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Address } from "./Address"
import { Responsible } from "./Responsible"
import { Member } from "./Member"

@Entity('partners')
export class Partner {
    @PrimaryGeneratedColumn("uuid")
    id: number

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
    status: string

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