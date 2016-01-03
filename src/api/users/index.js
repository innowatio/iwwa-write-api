import {getConvroutes, getAuthenticateMiddleware} from "lk-users-convexpress";

import dispatchEvent from "common/dispatch-event";
import * as config from "config";
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
