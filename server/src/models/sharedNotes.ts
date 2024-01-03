import mongoose from "mongoose";
import { NoteDoc } from "../utils/types";

const sharedNotesSchema = new mongoose.Schema(
    {
        note: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "note",
        },
        sharedWith: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
        },
        timestamps: true,
    }
);

export const SharedNote = mongoose.model("sharedNote", sharedNotesSchema);
