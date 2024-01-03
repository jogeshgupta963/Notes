import { Request, Response } from "express";
import crypto from "crypto";
import { Note } from "../../models/notes";

export const deleteNote = async (req: Request, res: Response) => {
    try {
        const { note_id } = req.params;

        const note = await Note.findOneAndDelete({
            _id: note_id,
            user: req.user!.id,
        });
        if (!note) {
            throw new Error("Note doesn't exist");
        }
        res.status(200).json({
            success: true,
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
