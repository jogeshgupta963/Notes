import { body } from "express-validator";
export const loginArgs = [
    body("email").isEmail().withMessage("Email is missing"),
    body("password").isString().withMessage("Password is missing"),
];
