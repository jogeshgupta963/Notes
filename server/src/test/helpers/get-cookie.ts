import request from "supertest";
import { app } from "../../app";

export const getCookie = async (
    password = "zxcvbnmm",
    email = "user1@gmail.com"
) => {
    const response = await request(app)
        .post("/api/auth/login")
        .send({
            email,
            password,
        })
        .expect(200);
    expect(response.body.success).toEqual(true);

    const cookie = response.get("Set-Cookie");

    return cookie;
};
