import mongoose, { ObjectId } from "mongoose";

const notes: {
    description: string;
    title: string;
    user?: string | ObjectId;
}[] = [
    {
        description: "note",
        title: "Note1",
    },
    {
        description: "note",
        title: "Note1",
    },
    {
        description: "note",
        title: "Note1",
    },
    {
        description: "note",
        title: "Note1",
    },
];
export default notes;
