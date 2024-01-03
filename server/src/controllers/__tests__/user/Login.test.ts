//basic login
import request from "supertest";
import { app } from "../../../app";

it("successfull login", async () => {
    const res = await request(app).post("/api/auth/login").send({
        email: "user1@gmail.com",
        password: "zxcvbnmm",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
});

it("user doesnt exist", async () => {
    const res = await request(app).post("/api/auth/login").send({
        email: "jogesh@gmail.com",
        password: "zxcvbnmm",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
});

it("Incorrect password", async () => {
    const res = await request(app).post("/api/auth/login").send({
        email: "user1@gmail.com",
        password: "zxcvbnm",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
});
