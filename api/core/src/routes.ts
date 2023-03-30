import { Router } from "express";
import { MemberController } from "./controllers/MemberController";
import { PartnerController } from "./controllers/PartnerController";
import { ResponsibleController } from "./controllers/ResponsibleController";
import { UserController } from "./controllers/UserController";

const routes = Router()

const partnerController = new PartnerController()
const memberController = new MemberController()
const userController = new UserController()
const responsibleController = new ResponsibleController()

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

//USER ROUTES
routes.get('/users', userController.getUsers)
routes.post('/register', userController.registerUser)
routes.post('/login', userController.login)
routes.delete('/users/:id', userController.deleteUsers)

//RESPONSIBLE ROUTES
routes.get('/responsibles', responsibleController.getResponsibles)
routes.post('/responsibles', responsibleController.createResponsible)
routes.put('/responsibles/:id', responsibleController.updateResponsible)
routes.delete('/responsibles/:id', responsibleController.deleteResponsible)

export default routes