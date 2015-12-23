import bearerToken from "express-bearer-token";

import mongodb from "../services/mongodb";
import hashToken from "../utils/hash-token";

export default function authenticate () {
    const bearerTokenMiddleware = bearerToken();
    return (req, res, next) => {
        bearerTokenMiddleware(req, res, async () => {
            const db = await mongodb;
            req.user = await db.collection("users").findOne({
                "services.resume.loginTokens.hashedToken": hashToken(req.token)
            });
            req.userId = req.user._id;
            delete req.token;
            next();
        });
    };
}
