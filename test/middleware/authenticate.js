import express from "express";
import request from "supertest-as-promised";
import {sign} from "jsonwebtoken";

import * as config from "config";
import authenticate from "middleware/authenticate";
import mongodb from "services/mongodb";

describe("authenticate middleware", () => {

    const server = express()
        .use(authenticate())
        .get("/", (req, res) => res.status(200).send("OK"));

    beforeEach(async () => {
        const db = await mongodb;
        return db.collection("users").insert({_id: "userId"});
    });

    afterEach(async () => {
        const db = await mongodb;
        return db.collection("users").remove({_id: "userId"});
    });

    it("401 on no jwt", () => {
        return request(server)
            .get("/")
            .expect(401)
            .expect({message: "No authorization token was found"});
    });

    it("401 on incorrect jwt", () => {
        return request(server)
            .get("/")
            .set("Authorization", "Bearer not-a-jwt")
            .expect(401)
            .expect({message: "jwt malformed"});
    });

    it("401 on invalid jwt signature [CASE: incorrect encoding]", () => {
        const token = sign({}, config.JWT_SECRET.toString("base64"));
        return request(server)
            .get("/")
            .set("Authorization", `Bearer ${token}`)
            .expect(401)
            .expect({message: "invalid signature"});
    });

    it("401 on invalid jwt signature [CASE: different secret]", () => {
        const token = sign({exp: 0}, new Buffer("different secret"));
        return request(server)
            .get("/")
            .set("Authorization", `Bearer ${token}`)
            .expect(401)
            .expect({message: "invalid signature"});
    });

    it("401 on expired jwt", () => {
        const token = sign({exp: 0}, config.JWT_SECRET);
        return request(server)
            .get("/")
            .set("Authorization", `Bearer ${token}`)
            .expect(401)
            .expect({message: "jwt expired"});
    });

    it("401 on valid token but no user", () => {
        const token = sign({sub: "anotherUserId"}, config.JWT_SECRET);
        return request(server)
            .get("/")
            .set("Authorization", `Bearer ${token}`)
            .expect(401)
            .expect({message: "Token has no corresponding user"});
    });

    it("not 401 on valid token with existing user", () => {
        const token = sign({sub: "userId"}, config.JWT_SECRET);
        return request(server)
            .get("/")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .expect("OK");
    });

    it("decorates the request with the user object and the userId", () => {
        const token = sign({sub: "userId"}, config.JWT_SECRET);
        const server = express()
            .use(authenticate())
            .get("/", (req, res) => res.status(200).send({
                user: req.user,
                userId: req.userId
            }));
        return request(server)
            .get("/")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .expect({
                user: {
                    _id: "userId"
                },
                userId: "userId"
            });
    });

});
