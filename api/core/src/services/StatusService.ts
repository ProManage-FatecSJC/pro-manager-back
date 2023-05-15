import { Partner } from "../entities/Partner";
import { Status } from "../entities/Status";
import { EStatus } from "../enum/EStatus";
import { StatusRepository } from "../repositories/StatusRepository";

export class StatusService{

    public async CriaStatus(statusLabel: number, partner: Partner){

        const status = new Status()
        status.partner = partner
        status.em_prospectation = new Date()

        if(statusLabel >= 1)
            status.first_contact = new Date()
        
        if(statusLabel >= 2)
            status.first_meeting = new Date()
        
        if(statusLabel >= 3)
            status.doc_sent = new Date()
        
        if(statusLabel >= 4)
            status.doc_return_Academy = new Date()
        
        if(statusLabel >= 5)
            status.doc_return = new Date()

        if(statusLabel >= 6)
            status.doc_return_analise = new Date()
        
        if(statusLabel >= 7)
            status.preparation_ES = new Date()
        
        if(statusLabel >= 8)
            status.analise_ES = new Date()

        if(statusLabel >= 9)
            status.analise_ES_Academy = new Date()

        if(statusLabel >= 10)
            status.toSign = new Date()
        
        if(statusLabel >= 11)
            status.partnership_signed = new Date()

        await StatusRepository.save(status)
    }

    public async salvaStatus(partner: Partner){
        const statusLabel = partner.status
        const status = await StatusRepository.getByPartner(partner.id)

        if(status == null) return

        if(statusLabel >= 1 && !status.first_contact)
            status.first_contact = new Date()
        
        if(statusLabel >= 2 && !status.first_meeting)
            status.first_meeting = new Date()
        
        if(statusLabel >= 3 && !status.doc_sent)
            status.doc_sent = new Date()
        
        if(statusLabel >= 4 && !status.doc_return_Academy)
            status.doc_return_Academy = new Date()
        
        if(statusLabel >= 5 && !status.doc_return)
            status.doc_return = new Date()

        if(statusLabel >= 6 && !status.doc_return_analise)
            status.doc_return_analise = new Date()
        
        if(statusLabel >= 7 && !status.preparation_ES)
            status.preparation_ES = new Date()
        
        if(statusLabel >= 8 && !status.analise_ES)
            status.analise_ES = new Date()

        if(statusLabel >= 9 && !status.analise_ES_Academy)
            status.analise_ES_Academy = new Date()

        if(statusLabel >= 10 && !status.toSign)
            status.toSign = new Date()
        
        if(statusLabel >= 11 && !status.partnership_signed)
            status.partnership_signed = new Date()
        
        await StatusRepository.save(status)
    }
}