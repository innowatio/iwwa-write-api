import bunyanRequest from "bunyan-request";
import express from "express";

import api from "api";
import * as config from "config";
import getLogger from "utils/get-logger";

const log = getLogger("iwwa-write-api");

express()
    .use(bunyanRequest({
        logger: log
    }))
    .use(api)
    .listen(config.PORT, () => {
        log.info(`Server listening on port ${config.PORT}`);
    });
