//basic login
import request from "supertest";
import { app } from "../../../app";
import { getCookie } from "../../../test/helpers/get-cookie";

it(" get user that is logged in already", async () => {
    const cookie = await getCookie();

    const res = await request(app).get("/api/auth").set("Cookie", cookie);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
});
