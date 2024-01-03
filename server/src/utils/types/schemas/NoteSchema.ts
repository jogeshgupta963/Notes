import { ObjectId, Document } from "mongoose";

export interface NoteDoc extends Document {
    description: string;
    title: string;
    user: ObjectId;
}
