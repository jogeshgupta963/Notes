import request from "supertest";
import { app } from "../../app";

export const createNote = async (
    cookie: string[],
    description = "test-note",
    title = "test-note-title"
) => {
    const response = await request(app)
        .post("/api/notes/")
        .set("Cookie", cookie)
        .send({
            description,
            title,
        })
        .expect(201);
    expect(response.body.success).toEqual(true);

    return response.body.data;
};
