import { Request, Response } from "express";
import { Note } from "../../models/notes";
import { SharedNote } from "../../models/sharedNotes";

export const getAllNotes = async (req: Request, res: Response) => {
    try {
        const notes = await Note.find({ user: req.user!.id });
        const sharednotes = await SharedNote.find({ sharedWith: req.user!.id });
        return res.status(200).json({
            success: true,
            data: [...notes, ...sharednotes] || [],
        });
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({
                succcess: false,
                data: err.message,
            });
        }
    }
};
