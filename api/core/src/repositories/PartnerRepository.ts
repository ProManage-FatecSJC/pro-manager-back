import { AppDataSource } from "../data-source";
import { PartnerFiltroDto } from "../dtos/partners/PartnerFiltroDto";
import { Partner } from "../entities/Partner";

export const PartnerRepository = AppDataSource.getRepository(Partner).extend({
    async findByFiltro(filtro: PartnerFiltroDto){
        try {
            let partners = await this.find()

            if (filtro.privacy != null && filtro.privacy != 2) 
                partners = partners.filter(x => x.privacy == filtro.privacy)
            
            if (filtro.type != null && filtro.type != 2)
                partners = partners.filter(x => x.type == filtro.type)
            
            if (filtro.state != null && filtro.state != 'all')
                partners = partners.filter(x => x.state == filtro.state)

            return partners
        } catch (error) {
            return error
        }
    }
})