import mongoose from "mongoose";
import "dotenv/config";
import { connection } from "./config/connection";
import { User } from "./models/user";
import { Note } from "./models/notes";
// import { courses } from "./data/courses";
import { config } from "./config/config";
import users from "./data/user";
import notes from "./data/note";

// const connect = async () => await connection(config.MONGO_URI);
// connect();
export const importData = async () => {
    try {
        await User.deleteMany();
        await Note.deleteMany();
        const user = await User.insertMany(users);
        notes.forEach((note) => {
            note.user = user[0].id;
        });
        await Note.insertMany(notes);
        console.log("data imported");
        // process.exit(0);
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
        // process.exit(1);
    }
};
async function destroyData() {
    try {
        await User.deleteMany();
        await Note.deleteMany();

        console.log("data destroyed");
        process.exit(0);
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
        process.exit(1);
    }
}
