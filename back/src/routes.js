import { Router } from "express";
import { AuthController } from "./controllers/auth/AuthController";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { CreateBarberController } from "./controllers/barbers/CreateBarberController";
import { CreateSchedulesController } from "./controllers/schedules/CreateSchedulesController";

const routes = Router();

const authController = new AuthController();
const createUserController = new CreateUserController();
const createBarberControlle = new CreateBarberController();
const createSchedulesController = new CreateSchedulesController();

// Autenticação
routes.post("/auth/", authController.handle);

// Usuário
routes.post("/user/", createUserController.handle);

// Barbeiro
routes.post("/barber/", createBarberControlle.handle);

// Agendamento
routes.post("/schedules/", createSchedulesController.handle);

export { routes };