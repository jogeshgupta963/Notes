import express from "express";
import { loginArgs, registerArgs } from "../utils/validators";
import { requestValidator } from "../middlewares/request-validator";
import { register } from "../controllers/user/register";
import { isLoggedIn } from "../middlewares/is-logged-in";
import { getCurrentUser } from "../controllers/user/get-user";
import { login } from "../controllers/user/login";

const router = express.Router();

router.route("/").get(isLoggedIn, getCurrentUser);

router.route("/login").post(loginArgs, requestValidator, login);

router.route("/register").post(registerArgs, requestValidator, register);

export { router as userRouter };
