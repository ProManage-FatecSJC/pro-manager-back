import { Router } from "express";
import { MemberController } from "./controllers/MemberController";
import { PartnerController } from "./controllers/PartnerController";

const routes = Router()

const partnerController = new PartnerController()
const memberController = new MemberController()

//PARTNER ROUTES
routes.get('/partners', partnerController.getPartners)
routes.post('/partners', partnerController.createPartner)
routes.put('/partners/:id', partnerController.updatePartner)
routes.delete('/partners/:id', partnerController.deletePartner)

//MEMBERS ROUTES
routes.get('/members', memberController.getMembers)
routes.post('/members', memberController.createMember)
routes.put('/members/:id', memberController.updateMember)
routes.delete('/members/:id', memberController.deleteMember)

export default routes