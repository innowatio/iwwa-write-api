import {json} from "body-parser";
import express from "express";

import * as config from "./config";
import collection from "./collection";
import sensorsSchema from "./schemas/sensors";

const sensors = collection("sensors", sensorsSchema);

express()
    .use(json())
    .use(sensors.router)
    .listen(config.PORT);
