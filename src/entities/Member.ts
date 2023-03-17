import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Address } from "./Address"
import { Responsible } from "./Responsible"
import { Partner } from "./Partner"

@Entity('members')
export class Member{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'text'})
    name: string

    @Column({ type: 'text'})
    trade_name: string //nome fantasia

    @Column({ type: 'text'})
    CNPJ: string

    @Column({ type: 'text'})
    telephone: string

    @ManyToOne(() => Partner, (partner) => partner.members)
    partner: Partner

    @OneToOne(() => Address)
    @JoinColumn({name: 'member_address_id'})
    address: Address

    @OneToOne(() => Responsible)
    @JoinColumn({name: 'member_responsible_id'})
    responsible: Responsible

}