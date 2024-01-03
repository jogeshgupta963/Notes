import express from "express";
import { isLoggedIn } from "../middlewares/is-logged-in";
import { requestValidator } from "../middlewares/request-validator";
import { noteCreateArgs, noteUpdateArgs } from "../utils/validators/note";
import {
    createNote,
    deleteNote,
    getAllNotes,
    getNoteById,
    searchNote,
    shareNote,
    updateNote,
} from "../controllers/note";

const router = express.Router();

router
    .route("/")
    .get(isLoggedIn, getAllNotes)
    .post(isLoggedIn, noteCreateArgs, requestValidator, createNote);

router.route("/search").get(isLoggedIn, searchNote);

router
    .route("/:note_id")
    .get(isLoggedIn, getNoteById)
    .put(isLoggedIn, noteUpdateArgs, requestValidator, updateNote)
    .delete(isLoggedIn, deleteNote);

router.route("/:note_id/share").post(isLoggedIn, shareNote);
export { router as noteRouter };
