import { Request, Response } from "express";
import { Note } from "../../models/notes";

export const searchNote = async (req: Request, res: Response) => {
    console.log("here");
    const { q } = req.query;
    const key = q?.toString() || "";
    console.log(q);
    try {
        const userId = req.user!.id;

        // Perform a case-insensitive search on title and description fields
        const regex = new RegExp(key, "i");

        const notes = await Note.find({
            user: userId,
            $or: [
                { title: { $regex: regex } },
                { description: { $regex: regex } },
            ],
        });

        return res.status(200).json({
            success: true,
            data: notes,
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
