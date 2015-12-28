import express from "express";
import request from "supertest-as-promised";
import {sign} from "jsonwebtoken";

import api from "api";
import * as config from "config";
import mongodb from "services/mongodb";
import {hash} from "utils/bcrypt";

import * as post from "api/login/post";

describe("POST /login", () => {

    const server = express()
        .use(api);

    before(async () => {
        post.__Rewire__("v4", () => "uuid");
        const db = await mongodb;
        return db.collection("users").insert({
            _id: "userId",
            emails: [{
                address: "user@example.com"
            }],
            services: {
                password: {
                    bcrypt: hash("password")
                }
            }
        });
    });

    after(async () => {
        post.__ResetDependency__("v4");
        const db = await mongodb;
        return db.collection("users").remove({_id: "userId"});
    });

    it("400 on invalid body [CASE: wrong properties]", () => {
        return request(server)
            .post("/login")
            .send({
                username: "username",
                password: "password"
            })
            .expect(400)
            .expect(/Validation failed/);
    });

    it("400 on invalid body [CASE: incorrect email]", () => {
        return request(server)
            .post("/login")
            .send({
                email: "not-an-email",
                password: "password"
            })
            .expect(400)
            .expect(/Validation failed/);
    });

    it("404 on no user corresponding to email", () => {
        return request(server)
            .post("/login")
            .send({
                email: "wrong-user@example.com",
                password: "password"
            })
            .expect(404)
            .expect({
                message: "User not found"
            });
    });

    it("200 and token on successful login", () => {
        const token = sign({
            sub: "userId",
            iss: config.HOSTNAME,
            jti: "uuid"
        }, config.JWT_SECRET);
        return request(server)
            .post("/login")
            .send({
                email: "user@example.com",
                password: "password"
            })
            .expect(200)
            .expect({token});
    });

});
