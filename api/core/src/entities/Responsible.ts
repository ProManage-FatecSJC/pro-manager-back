import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Contact } from "./Contact"


@Entity('responsibles')
export class Responsible{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'text'})
    name: string

    @Column({ type: 'text'})
    CPF: string

    @Column({ type: 'text'})
    unit: string
    
    @OneToMany(()=> Contact, contact => Contact.responsible)
    contacts: Contact[]

}