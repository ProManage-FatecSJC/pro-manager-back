import { text } from "express";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Responsible } from "./Responsible";

@Entity('contacts')
export class Contact{
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({ type: 'text'})
    telephone: string

    @Column({ type: 'text'})
    email: string

    @ManyToOne(() => Responsible, responsible => responsible.contacts)  /// relacionamento um pra muitos??
    @JoinColumn({name: 'responsible_id'})
    responsible: Responsible
    static responsible: any;
}