import request from "supertest";
import { app } from "../../../app";
import { getCookie } from "../../../test/helpers/get-cookie";
import { createNote } from "../../../test/helpers/create-note";

it("update note successfully", async () => {
    const cookie = await getCookie();
    const note = await createNote(cookie);

    const res = await request(app)
        .put(`/api/notes/${note.id}`)
        .send({ description: "update" })
        .set("Cookie", cookie);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
});
it("update note  unauthenticated", async () => {
    const cookie = await getCookie();
    const note = await createNote(cookie);

    const res = await request(app).put(`/api/notes/${note.id}`);
    // .set("Cookie", cookie);
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
});
