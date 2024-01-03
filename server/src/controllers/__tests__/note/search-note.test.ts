import request from "supertest";
import { app } from "../../../app";
import { getCookie } from "../../../test/helpers/get-cookie";

it("search notes", async () => {
    const cookie = await getCookie();
    const res = await request(app)
        .get("/api/notes/search?q=m")
        .set("Cookie", cookie);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
});
