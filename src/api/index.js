import convexpress from "convexpress";

import * as config from "config";
import usersConvroutes from "api/users";
import sensorsConvroutes from "api/sensors";
import sitesConvroutes from "api/sites";
import aggregatedReadingsConvroutes from "api/aggregated-readings";
import favChartsConvroutes from "api/favorite-charts";
import meterReports from "api/meter-reports";
import notificationsConvroutes from "api/notifications";
import notificationsReadedConvroutes from "api/notifications-readed";
import userInteractions from "api/user-interactions";
import answersConvroutes from "api/answers";
import questionsConvroutes from "api/questions";
import readingsConvroutes from "api/readings";
import emailsConvroutes from "api/emails";
import groupsConvroutes from "api/groups";
import alarmsConvroutes from "api/alarms";

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
    .convroute(usersConvroutes.insert)
    .convroute(usersConvroutes.replace)
    //  Sensors
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
    // Notifications
    .convroute(notificationsConvroutes.insert)
    // Notifications readed
    .convroute(notificationsReadedConvroutes.insert)
    //  Meter reports
    .convroute(meterReports.insert)
    //  User interactions
    .convroute(userInteractions.insert)
    // Answers
    .convroute(answersConvroutes.insert)
    // Questions
    .convroute(questionsConvroutes.insert)
    .convroute(questionsConvroutes.replace)
    .convroute(questionsConvroutes.remove)
    // Readings
    .convroute(readingsConvroutes.insert)
    // Emails
    .convroute(emailsConvroutes.insert)
    // Groups
    .convroute(groupsConvroutes.insert)
    .convroute(groupsConvroutes.replace)
    .convroute(groupsConvroutes.remove)
    //Alarms
    .convroute(alarmsConvroutes.insert)
    .convroute(alarmsConvroutes.replace)
    .convroute(alarmsConvroutes.remove);
