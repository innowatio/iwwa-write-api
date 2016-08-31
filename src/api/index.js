import convexpress from "convexpress";

import * as config from "config";
import {usersConvroutes} from "api/users";
import sensorsConvroutes from "api/sensors";
import sitesConvroutes from "api/sites";
import aggregatedReadingsConvroutes from "api/aggregated-readings";
import favChartsConvroutes from "api/favorite-charts";
import meterReports from "api/meter-reports";
import notifications from "api/notifications";
import notificationReaded from "api/notifications";

const options = {
    info: {
        title: "sd-api",
        version: "1.0.0"
    },
    host: config.HOST
};
export default convexpress(options)
    .serveSwagger()
    // Users
    .convroute(usersConvroutes.login)
    .convroute(usersConvroutes.createUser)
    .convroute(usersConvroutes.removeUser)
    .convroute(usersConvroutes.addRole)
    .convroute(usersConvroutes.removeRole)
    .convroute(usersConvroutes.replaceProfile)
    // Sensors
    .convroute(sensorsConvroutes.insert)
    .convroute(sensorsConvroutes.replace)
    .convroute(sensorsConvroutes.remove)
    // Sites
    .convroute(sitesConvroutes.insert)
    .convroute(sitesConvroutes.replace)
    .convroute(sitesConvroutes.remove)
    // Aggregated readings
    .convroute(aggregatedReadingsConvroutes.insert)
    // Favorite charts
    .convroute(favChartsConvroutes.insert)
    // Meter reports
    .convroute(meterReports.insert)
    // Notifications
    .convroute(notifications.insert)
    // Notifications readed
    .convroute(notificationReaded.insert);
