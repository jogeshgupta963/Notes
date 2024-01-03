import request from "supertest";
import { app } from "../../../app";

it("Successfull Registeration returns 201", async () => {
    const response = await request(app).post("/api/auth/register").send({
        name: "Jogesh",
        email: "jogeshgupta963@gmail.com",
        password: "zxcvbnmm",
    });

    expect(response.statusCode).toEqual(201);
    expect(response.body.success).toEqual(true);
});

it("atleast 1 compulsory parameter not entered", async () => {
    const response = await request(app)
        .post("/api/auth/register")
        .send({
            name: "Jogesh",
            // email: "jogeshgupta963@gmail.com",
            password: "zxcvbnmm",
        })
        .expect(400);
    expect(response.body.success).toEqual(false);
});

it("Duplicate email registeration attempt", async () => {
    const response1 = await request(app)
        .post("/api/auth/register")
        .send({
            name: "another name",
            email: "user1@gmail.com",
            password: "zxcvbnmm",
        })
        .expect(400);
    expect(response1.body.success).toEqual(false);
});
