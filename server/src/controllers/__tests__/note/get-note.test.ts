import request from "supertest";
import { app } from "../../../app";
import { getCookie } from "../../../test/helpers/get-cookie";
import { createNote } from "../../../test/helpers/create-note";

it("get all notes", async () => {
    const cookie = await getCookie();
    const res = await request(app).get("/api/notes").set("Cookie", cookie);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
});
it("get note by id", async () => {
    const cookie = await getCookie();
    const note = await createNote(cookie);
    console.log(note);
    const res = await request(app)
        .get(`/api/notes/${note.id}`)
        .set("Cookie", cookie);
    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
});
it("get note by id unauthenticated", async () => {
    const cookie = await getCookie();
    const note = await createNote(cookie);

    const res = await request(app).get(`/api/notes/${note.id}`);
    // .set("Cookie", cookie);
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
});
