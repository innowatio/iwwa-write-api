import jwt from "express-jwt";

import * as config from "config";
import mongodb from "services/mongodb";

async function getUserFromToken (token) {
    const db = await mongodb;
    return db.collection("users").findOne({
        _id: token.sub
    });
}

export default function authenticate () {
    const jwtMiddleware = jwt({secret: config.JWT_SECRET});
    return (req, res, next) => {
        jwtMiddleware(req, res, async (err) => {
            if (err) {
                return res.status(401).send({
                    message: err.message
                });
            }
            /*
            *   On successful verification of the jwt token, the jwt middleware
            *   decorates the request assigning the token payload to the `user`
            *   property of the request. We overwrite this behaviour assigning
            *   to the `user` property the user object retrieved from the
            *   database.
            */
            const user = await getUserFromToken(req.user);
            if (!user) {
                return res.status(401).send({
                    message: "Token has no corresponding user"
                });
            }
            req.user = user;
            req.userId = user._id;
            next();
        });
    };
}
