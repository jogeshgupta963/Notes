import request from "supertest";
import { app } from "../../../app";
import { getCookie } from "../../../test/helpers/get-cookie";
import { createNote } from "../../../test/helpers/create-note";

it("Create note successfully", async () => {
    const cookie = await getCookie();
    const res = await request(app)
        .post("/api/notes")
        .send({ title: "note taking", description: "note taking description" })
        .set("Cookie", cookie);
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toEqual(true);
});
it("Create note without being logged in returns 400", async () => {
    const res = await request(app)
        .post("/api/notes")
        .send({ title: "note taking", description: "note taking description" });
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
});
it("Do not pass either of the argument returns 400", async () => {
    const cookie = await getCookie();
    const res = await request(app)
        .post("/api/notes")
        .send({
            title: "note taking",
            //  description: "note taking description"
        })
        .set("Cookie", cookie);
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
});
