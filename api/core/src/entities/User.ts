import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Contact{
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({ type: 'text'})
    name: string

    @Column({ type: 'text'})
    email: string

    @Column({ type: 'text'})
    password: string

    @Column({ type: 'text'})
    role: string

}

