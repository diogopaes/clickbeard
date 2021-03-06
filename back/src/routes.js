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
import { GetBarberController } from "./controllers/barbers/GetBarberController";
import { ProfileUserController } from "./controllers/users/ProfileUserController";
import { GetSchedulesUserController } from "./controllers/schedules/GetSchedulesUserController";
import { GetSchedulesTodayController } from "./controllers/schedules/GetSchedulesTodayController";
import { GetSchedulesUpcomingController } from "./controllers/schedules/GetSchedulesUpcomingController";

const routes = Router();

const authController = new AuthController();

const createUserController = new CreateUserController();
const getProfileUserController = new ProfileUserController();

const createBarberControlle = new CreateBarberController();
const getBarbersController = new GetBarbersController();
const getBarber = new GetBarberController();
const deleteBarberController = new DeleteBarberController();

const createSchedulesController = new CreateSchedulesController();
const updateSchedulesController = new UpdateSchedulesController();
const getSchedulesUserController = new GetSchedulesUserController();
const getSchedulesController = new GetSchedulesController();
const getSchedulesTodayController = new GetSchedulesTodayController();
const getSchedulesUpcomingController = new GetSchedulesUpcomingController();

// Autentica????o
routes.post("/auth/", authController.handle);

// Usu??rio
routes.post("/user/", createUserController.handle);
routes.get("/profile/", ensureAuthUser, getProfileUserController.handle);

// Barbeiro
routes.post("/barber/", createBarberControlle.handle);
routes.get("/barber/", getBarbersController.handle);
routes.get("/barber/:id", getBarber.handle);
routes.delete("/barber/:id", deleteBarberController.handle);

// Agendamento
routes.post("/schedules/", ensureAuthUser, createSchedulesController.handle);
routes.get("/schedules/", ensureAuthUser, getSchedulesController.handle);
routes.get("/schedules/today/:day", ensureAuthUser, getSchedulesTodayController.handle);
routes.get("/schedules/upcoming/:noday", ensureAuthUser, getSchedulesUpcomingController.handle);
routes.get("/schedules/:id", ensureAuthUser, getSchedulesUserController.handle);
routes.put("/schedules/:id", ensureAuthUser, updateSchedulesController.handle);

export { routes };