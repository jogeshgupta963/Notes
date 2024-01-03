import { Request, Response } from "express";
import crypto from "crypto";
import { Note } from "../../models/notes";
import { SharedNote } from "../../models/sharedNotes";

export const shareNote = async (req: Request, res: Response) => {
    try {
        const { user } = req.body;
        const { note_id } = req.params;
        //new note
        const sharedNote = new SharedNote({
            note: note_id,
            sharedWith: user,
        });
        await sharedNote.save();

        if (!shareNote) {
            return res.status(500).json({
                success: false,
                data: "Server Down",
            });
        }

        res.status(201).json({
            success: true,
            data: shareNote,
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
