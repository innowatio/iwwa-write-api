import convexpress from "convexpress";

import * as config from "config";
import {usersConvroutes} from "api/users";
import sensorsConvroutes from "api/sensors";
import sitesConvroutes from "api/sites";
import aggregatedReadingsConvroutes from "api/aggregated-readings";

const options = {
    info: {
        title: "sd-api",
        version: "1.0.0"
    },
    host: config.HOST
};
export default convexpress(options)
    .serveSwagger()
    //  Users
    .convroute(usersConvroutes.login)
    .convroute(usersConvroutes.createUser)
    .convroute(usersConvroutes.removeUser)
    .convroute(usersConvroutes.addRole)
    .convroute(usersConvroutes.removeRole)
    .convroute(usersConvroutes.replaceProfile)
    //  Sensors
    .convroute(sensorsConvroutes.insert)
    .convroute(sensorsConvroutes.replace)
    .convroute(sensorsConvroutes.remove)
    //  Sites
    .convroute(sitesConvroutes.insert)
    .convroute(sitesConvroutes.replace)
    .convroute(sitesConvroutes.remove)
    //  Aggregated readings
    .convroute(aggregatedReadingsConvroutes.insert);
