import { body } from "express-validator";

export const noteUpdateArgs = [
    body("description").isString().optional(),
    body("title").isString().optional(),
];
