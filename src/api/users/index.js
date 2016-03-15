import {getConvroutes, getAuthenticateMiddleware} from "lk-users-convexpress";

import * as config from "config";
import dispatchEvent from "services/dispatcher";
import {findUserByEmail, findUserById, getUserId} from "./utils";

const usersOptions = {
    jwtSecret: config.JWT_SECRET,
    jwtIssuer: config.JWT_ISSUER,
    dispatchEvent,
    findUserByEmail,
    findUserById,
    getUserId,
    allowSignup: false
};
export const usersConvroutes = getConvroutes(usersOptions);
export const authenticateMiddleware = getAuthenticateMiddleware(usersOptions);
