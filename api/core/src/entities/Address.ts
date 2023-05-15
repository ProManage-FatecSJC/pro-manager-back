import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('adresses')
export class Address {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({ type: 'text'})
    CEP: string

    @Column({ type: 'text'})
    street: string

    @Column({ type: 'int'})
    number: number

    @Column({ type: 'text'})
    complement: string

    @Column({ type: 'text'})
    state: string

    @Column({ type: 'text'})
    city: string
}