import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ids')
export class IdsExcluidos {
    @PrimaryGeneratedColumn('identity')
    id: number

    @Column({ type: 'uuid' })
    idExcluido: string

    @Column({ type: 'uuid' })
    idExclusor: string
}