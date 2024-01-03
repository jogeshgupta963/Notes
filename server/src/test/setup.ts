import mongoose from "mongoose";
import { connection } from "../config/connection";
import { config } from "../config/config";
import { importData } from "../seeder";
beforeAll(async () => {
    // await connection(config.MONGO_URI_TESTING);
    await mongoose.connect(config.MONGO_URI_TESTING);
    await importData();
});

beforeEach(async () => {});

afterAll(async () => {
    await mongoose.connection.close();
});
