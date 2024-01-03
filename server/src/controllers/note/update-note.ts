import { Request, Response } from "express";
import crypto from "crypto";
import { Note } from "../../models/notes";

export const updateNote = async (req: Request, res: Response) => {
    try {
        const { description, title } = req.body;
        const { note_id } = req.params;

        const note = await Note.findOne({
            _id: note_id,
            user: req.user!.id,
        });
        if (!note) {
            throw new Error("Note doesn't exist");
        }
        note.description = description || note.description;
        note.title = title || note.title;
        await note.save();
        res.status(200).json({
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
