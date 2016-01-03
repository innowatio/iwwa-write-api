import bunyanRequest from "bunyan-request";
import express from "express";

import api from "api";
import * as config from "config";
import log from "common/logger";

express()
    .use(bunyanRequest({
        logger: log
    }))
    .use(api)
    .listen(config.PORT, () => {
        log.info(`Server listening on port ${config.PORT}`);
    });
