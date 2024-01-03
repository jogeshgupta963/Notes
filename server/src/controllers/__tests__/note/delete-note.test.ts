import request from "supertest";
import { app } from "../../../app";
import { getCookie } from "../../../test/helpers/get-cookie";
import { createNote } from "../../../test/helpers/create-note";

it("delete note successfully", async () => {
    const cookie = await getCookie();
    const note = await createNote(cookie);

    const res = await request(app)
        .delete(`/api/notes/${note.id}`)
        .set("Cookie", cookie);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
});
it("delete note  unauthenticated", async () => {
    const cookie = await getCookie();
    const note = await createNote(cookie);

    const res = await request(app).delete(`/api/notes/${note.id}`);
    // .set("Cookie", cookie);
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
});
