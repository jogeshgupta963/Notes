import request from "supertest";
import { app } from "../../../app";
import { getCookie } from "../../../test/helpers/get-cookie";
import { createNote } from "../../../test/helpers/create-note";

it("share note successfully", async () => {
    const cookie = await getCookie();
    const note = await createNote(cookie);
    const response = await request(app).post("/api/auth/login").send({
        email: "user2@gmail.com",
        password: "zxcvbnmm",
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body.success).toEqual(true);

    const res = await request(app)
        .post(`/api/notes/${note.id}/share`)
        .send({ user: response.body.data.id })
        .set("Cookie", cookie);
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toEqual(true);
});
it("share note without authentication returns 400", async () => {
    const cookie = await getCookie();
    const note = await createNote(cookie);
    const response = await request(app).post("/api/auth/login").send({
        email: "user2@gmail.com",
        password: "zxcvbnmm",
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body.success).toEqual(true);

    const res = await request(app)
        .post(`/api/notes/${note.id}/share`)
        .send({ user: response.body.data.id });
    // .set("Cookie", cookie);
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
});
