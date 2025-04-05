import {Router} from "express";
import { validateUser } from "../middlewares/validate.middleware.js";
import { signup, login, logout } from "../controllers/auth.controller.js";

const authRouter = Router();



authRouter.post('/signup', validateUser, signup);
authRouter.post('/login', validateUser, login);
authRouter.post('/logout', logout);

export default authRouter;
