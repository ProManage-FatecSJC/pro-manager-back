import { Router } from "express";
import { PartnerController } from "./controllers/PartnerController";

const routes = Router()

const partnerController = new PartnerController()

//PARTNER ROUTES
routes.get('/partners', partnerController.getPartners)
routes.post('/partners', partnerController.createPartner)
routes.put('/partners/:id', partnerController.updatePartner)
routes.delete('/partners/:id', partnerController.deletePartner)

export default routes