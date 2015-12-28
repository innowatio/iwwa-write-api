import {sign} from "jsonwebtoken";
import {v4} from "node-uuid";

import * as config from "config";
import {compare} from "utils/bcrypt";
import mongodb from "services/mongodb";

export const path = "/login";
export const method = "post";
export const description = "Login";
export const parameters = [{
    name: "credentials",
    in: "body",
    required: true,
    schema: {
        type: "object",
        properties: {
            email: {
                description: "Email",
                type: "string",
                format: "email"
            },
            password: {
                description: "Password",
                type: "string"
            }
        },
        additionalProperties: false,
        required: ["email", "password"]
    }
}];
export const responses = {
    "404": {
        description: "User not found"
    },
    "401": {
        description: "Invalid password"
    },
    "200": {
        description: "Login successful, return login token"
    }
};
export async function handler (req, res) {
    const db = await mongodb;
    const user = await db.collection("users").findOne({
        "emails.address": req.body.email
    });
    if (!user) {
        return res.status(404).send({
            message: "User not found"
        });
    }
    if (!compare(req.body.password, user.services.password.bcrypt)) {
        return res.status(401).send({
            message: "Invalid password"
        });
    }
    const token = sign({
        sub: user._id,
        iss: config.HOSTNAME,
        jti: v4()
    }, config.JWT_SECRET);
    res.status(200).send({token});
}
