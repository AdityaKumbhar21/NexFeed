import {Router} from "express";
import { validateUser } from "../middlewares/validate.middleware";
import { signup, login, logout } from "../controllers/auth.controller";

const authRouter = Router();



authRouter.post('/signup', validateUser, signup);
authRouter.post('/login', validateUser, login);
authRouter.post('/logout', logout);

export default authRouter;
