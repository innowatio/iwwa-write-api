import {json} from "body-parser";
import bunyanRequest from "bunyan-request";
import express from "express";

import * as config from "./config";
import sensors from "./collections/sensors";
import authenticate from "./middleware/authenticate";
import getLogger from "./utils/get-logger";

const log = getLogger("iwwa-write-api");

express()
    .use(bunyanRequest({
        logger: log
    }))
    .use(json())
    .use(authenticate())
    .use(sensors.router)
    .listen(config.PORT, () => {
        log.info(`asd-agent listening on port ${config.PORT}`);
    });
