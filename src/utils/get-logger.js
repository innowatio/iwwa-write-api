import bunyan from "bunyan";
import createCloudWatchStream from "bunyan-cloudwatch";

import * as config from "../config";

export default function getLogger (name) {
    return bunyan.createLogger({
        name,
        streams: [
            {
                stream: process.stdout
            },
            config.NODE_ENV === "production" ? {
                stream: createCloudWatchStream({
                    logGroupName: config.AWS_CLOUDWATCH_GROUP,
                    logStreamName: config.AWS_CLOUDWATCH_STREAM,
                    region: config.AWS_CLOUDWATCH_REGION
                }),
                type: "raw"
            } : null
        ].filter(i => !!i)
    });
}
