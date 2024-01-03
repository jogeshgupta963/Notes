import { Request, Response } from "express";
import { Note } from "../../models/notes";
import mongoose from "mongoose";
import { SharedNote } from "../../models/sharedNotes";

export const getNoteById = async (req: Request, res: Response) => {
    try {
        const { note_id } = req.params;
        console.log(req.user!.id);
        const note = await Note.findOne({
            _id: note_id,
            user: req.user!.id,
        });
        const sharedNote = await SharedNote.findOne({
            _id: note_id,
            sharedWith: req.user!.id,
        });
        if (!note) throw new Error("Note Doesnt exist");
        return res.status(200).json({
            success: true,
            data: note || sharedNote || [],
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
