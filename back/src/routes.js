import { Router } from "express";
import { AuthController } from "./controllers/auth/AuthController";
import { CreateController } from "./controllers/users/CreateController";

const routes = Router();

const createController = new CreateController();
const authController = new AuthController();

routes.post("/user/", createController.handle);
routes.post("/auth/", authController.handle);

export { routes };