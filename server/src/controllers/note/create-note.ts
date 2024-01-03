import { Request, Response } from "express";
import crypto from "crypto";
import { Note } from "../../models/notes";

export const createNote = async (req: Request, res: Response) => {
    try {
        const { description, title } = req.body;

        //new note
        const note = new Note({
            description,
            title,
            user: req.user!.id,
        });
        await note.save();

        if (!note) {
            return res.status(500).json({
                success: false,
                data: "Server Down",
            });
        }

        res.status(201).json({
            success: true,
            data: note,
        });
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({
                success: false,
                data: err.message,
            });
        }
    }
};
