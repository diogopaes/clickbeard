import { Router } from "express";
import { AuthController } from "./controllers/auth/AuthController";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { CreateBarberController } from "./controllers/barbers/CreateBarberController";
import { CreateSchedulesController } from "./controllers/schedules/CreateSchedulesController";
import { ensureAuthUser } from "./middlewares/ensureAuthUser";
import { GetBarbersController } from "./controllers/barbers/GetBarbersController";
import { DeleteBarberController } from "./controllers/barbers/DeleteBarberController";

const routes = Router();

const authController = new AuthController();

const createUserController = new CreateUserController();

const createBarberControlle = new CreateBarberController();
const getBarbersController = new GetBarbersController();
const deleteBarberController = new DeleteBarberController();

const createSchedulesController = new CreateSchedulesController();

// Autenticação
routes.post("/auth/", authController.handle);

// Usuário
routes.post("/user/", createUserController.handle);

// Barbeiro
routes.post("/barber/", createBarberControlle.handle);
routes.get("/barber/", getBarbersController.handle);
routes.delete("/barber/:id", deleteBarberController.handle);

// Agendamento
routes.post("/schedules/", ensureAuthUser, createSchedulesController.handle);

export { routes };