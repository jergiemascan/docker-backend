/**
 * @group component
 */
const request = require("supertest");
const express = require("express");
// const app = express();
// const app = require("../app");

const HOST = process.env.HOST || "http://localhost:3001";

const newUser = {
    firstname: "me",
    lastname: "doe",
    email: "testing@gmail.com",
    password: "string1",
};

describe("Testing API with supertest ", () => {
    // describe("given GET /", () => {
    //     it("should return status 200", async () => {
    //         await request(HOST)
    //             .get("/")
    //             .expect("Allow", /GET/)
    //             .expect(200)
    //             .expect("Content-Type", "text/html");
    //     });
    // });

    describe("given POST /auth/signup/v1", function () {
        it("should add newUser", async () => {
            await request(HOST)
                .post("/auth/signup/v1")
                .send(newUser)
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(201)
                .then(function (err, responses) {
                    if (err) return err;
                });
        });
    });

    // const id = "6321abefe0c26ab3457d02c4";
    // describe("given PATCH /update/6321abefe0c26ab3457d02c4", () => {
    //     it("should update a user", async () => {
    //         await request(HOST)
    //             .patch("/update/6321abefe0c26ab3457d02c4")
    //             .send({
    //                 firstname: "jojo",
    //                 lastname: "doe",
    //                 email: "try@gmail.com",
    //                 password: "string1",
    //             })
    //             .set("Content-Type", "application/json")
    //             .expect("Content-Type", "application/json")
    //             .expect(200)
    //             .then(function (err, responses) {
    //                 if (err) return err;
    //             });
    //     });
    // });

    // describe("given DELETE /delete/6322dbad52a92f13159c2644", () => {
    //     it("should delete a user", async () => {
    //         await request(HOST)
    //             .delete("/delete/6322dbad52a92f13159c2644")
    //             .then(function (err, responses) {
    //                 if (err) return err;
    //             });
    //     });
    // });
});
