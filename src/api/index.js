import convexpress from "convexpress";

import * as config from "config";
import {usersConvroutes} from "api/users";
import sensorsConvroutes from "api/sensors";

const options = {
    info: {
        title: "sd-api",
        version: "1.0.0"
    },
    host: config.HOST
};
export default convexpress(options)
    .serveSwagger()
    .convroute(usersConvroutes.login)
    .convroute(usersConvroutes.createUser)
    .convroute(usersConvroutes.removeUser)
    .convroute(usersConvroutes.addRole)
    .convroute(usersConvroutes.removeRole)
    .convroute(usersConvroutes.replaceProfile)
    .convroute(sensorsConvroutes.insert)
    .convroute(sensorsConvroutes.replace)
    .convroute(sensorsConvroutes.remove);
