import { Router } from "express";
import { MemberController } from "./controllers/MemberController";
import { PartnerController } from "./controllers/PartnerController";
import { ResponsibleController } from "./controllers/ResponsibleController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middleware/AuthMiddleware";
import { StatusController } from "./controllers/StatusController";

const routes = Router()

const partnerController = new PartnerController()
const memberController = new MemberController()
const userController = new UserController()
const responsibleController = new ResponsibleController()
const statusController = new StatusController()

//PARTNER ROUTES
routes.get('/partners', authMiddleware, partnerController.getPartners)
routes.get('/partners/:id', authMiddleware, partnerController.getPartnerById)
routes.post('/partners/byFiltro', authMiddleware, partnerController.getPartnersByFiltro)
routes.post('/partners', authMiddleware, partnerController.createPartner)
routes.put('/partners/:id', authMiddleware, partnerController.updatePartner)
routes.put('/partners/archive/:id', authMiddleware, partnerController.archivePartner)

//MEMBERS ROUTES
routes.get('/members', authMiddleware, memberController.getMembers)
routes.get('/members/:id', authMiddleware, memberController.getMembersByPartner)
routes.get('/membersById/:id', authMiddleware, memberController.getMemberById)
routes.post('/members', authMiddleware, memberController.createMember)
routes.put('/members/:id', authMiddleware, memberController.updateMember)
routes.put('/members/archive/:id', authMiddleware, memberController.archiveMember)

//USER ROUTES
routes.get('/users', authMiddleware, userController.getUsers)
routes.post('/register', authMiddleware, userController.registerUser)
routes.post('/login', userController.login)
routes.delete('/users/:id', authMiddleware, userController.deleteUsers)

//RESPONSIBLE ROUTES
routes.get('/responsibles', authMiddleware, responsibleController.getResponsibles)
routes.post('/responsibles', authMiddleware, responsibleController.createResponsible)
routes.put('/responsibles/:id', authMiddleware, responsibleController.updateResponsible)
routes.delete('/responsibles/:id', authMiddleware, responsibleController.deleteResponsible)

//STATUS ROUTES
routes.get('/status', authMiddleware, statusController.getStatus)
routes.delete('/status/:id', authMiddleware, statusController.deleteStatus)

export default routes