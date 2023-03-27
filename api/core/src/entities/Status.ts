import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Partner } from "./Partner"

@Entity('statuses')
export class Status {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({ type: "date" })
    em_prospectation: Date /// pareceira e interesse da Academy

    @Column({ type: "date" })
    first_contact: Date   /// feito primeiro ctt

    @Column({ type: "date" })
    first_meeting: Date /// primeira reunião marcada/realizada

    @Column({ type: "date" })
    doc_sent: Date ///doc enviada pelo parceiro 

    @Column({ type: "date" })
    doc_return_Academy: Date /// doc devoldida em analise Academy

    @Column({ type: "date" })
    doc_return: Date /// doc devoldida em analise Legal

    @Column({ type: "date" })
    doc_return_analise: Date /// doc analisada evolvida para o parceiro

    @Column({ type: "date" })
    preparation_ES: Date /// 

    @Column({ type: "date" })
    analise_ES: Date /// analise Legal

    @Column({ type: "date" })
    analise_ES_Academy: Date /// analise Academy

    @Column({ type: "date" })
    toSing: Date /// pronto para assinar

    @Column({ type: "date" })
    partnership_signed: Date /// parceria firmada

    @OneToOne(()=> Partner, partner => partner.status)
    partner: Partner



}