import { body } from "express-validator";

export const noteCreateArgs = [
    body("description").isString().withMessage("description required"),
    body("title").isString().withMessage("title required"),
];
