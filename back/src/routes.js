import { Router } from "express";
import { AuthController } from "./controllers/auth/AuthController";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { CreateBarberController } from "./controllers/barbers/CreateBarberController";
import { CreateSchedulesController } from "./controllers/schedules/CreateSchedulesController";
import { ensureAuthUser } from "./middlewares/ensureAuthUser";
import { GetBarbersController } from "./controllers/barbers/GetBarbersController";
import { DeleteBarberController } from "./controllers/barbers/DeleteBarberController";
import { GetSchedulesController } from "./controllers/schedules/GetSchedulesController";
import { UpdateSchedulesController } from "./controllers/schedules/UpdateSchedulesController";

const routes = Router();

const authController = new AuthController();

const createUserController = new CreateUserController();

const createBarberControlle = new CreateBarberController();
const getBarbersController = new GetBarbersController();
const deleteBarberController = new DeleteBarberController();

const createSchedulesController = new CreateSchedulesController();
const getSchedulesController = new GetSchedulesController();
const updateSchedulesController = new UpdateSchedulesController();

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
routes.get("/schedules/", ensureAuthUser, getSchedulesController.handle);
routes.put("/schedules/:id", ensureAuthUser, updateSchedulesController.handle);

export { routes };