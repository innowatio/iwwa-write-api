import convexpress from "convexpress";

import * as config from "config";
import {usersConvroutes} from "api/users";
import sensorsConvroutes from "api/sensors";
import sitesConvroutes from "api/sites";
import aggregatedReadingsConvroutes from "api/aggregated-readings";
import favChartsConvroutes from "api/favorite-charts";
import meterReports from "api/meter-reports";
import userInteractions from "api/user-interactions";
import answersConvroutes from "api/answers";
import questionsConvroutes from "api/questions";

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
    .convroute(aggregatedReadingsConvroutes.insert)
    //  Favorite charts
    .convroute(favChartsConvroutes.insert)
    //  Meter reports
    .convroute(meterReports.insert)
<<<<<<< HEAD
    //  User interactions
    .convroute(userInteractions.insert);
=======
    // Answers
    .convroute(answersConvroutes.insert)
    // Questions
    .convroute(questionsConvroutes.insert)
    .convroute(questionsConvroutes.replace)
    .convroute(questionsConvroutes.remove);
>>>>>>> answers
