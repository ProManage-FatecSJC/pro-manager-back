import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Partner } from "./Partner"

@Entity('statuses')
export class Status {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "date", nullable: true })
    em_prospectation: Date /// pareceira e interesse da Academy

    @Column({ type: "date", nullable: true })
    first_contact: Date   /// feito primeiro ctt

    @Column({ type: "date", nullable: true })
    first_meeting: Date /// primeira reunião marcada/realizada

    @Column({ type: "date", nullable: true })
    doc_sent: Date ///doc enviada pelo parceiro 

    @Column({ type: "date", nullable: true })
    doc_return_Academy: Date /// doc devoldida em analise Academy

    @Column({ type: "date", nullable: true })
    doc_return: Date /// doc devoldida em analise Legal

    @Column({ type: "date", nullable: true })
    doc_return_analise: Date /// doc analisada evolvida para o parceiro

    @Column({ type: "date", nullable: true })
    preparation_ES: Date /// 

    @Column({ type: "date", nullable: true })
    analise_ES: Date /// analise Legal

    @Column({ type: "date", nullable: true })
    analise_ES_Academy: Date /// analise Academy

    @Column({ type: "date", nullable: true })
    toSign: Date /// pronto para assinar

    @Column({ type: "date", nullable: true })
    partnership_signed: Date /// parceria firmada

    @OneToOne(()=> Partner, partner => partner.statusDates, {onDelete: 'CASCADE'})
    partner: Partner



}