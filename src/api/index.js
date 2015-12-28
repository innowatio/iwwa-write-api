import convexpress from "convexpress";

import * as config from "config";
import authenticate from "middleware/authenticate";

const options = {
    info: {
        title: "sd-api",
        version: "1.0.0"
    },
    host: config.HOST
};
export default convexpress(options)
    .serveSwagger()
    .convroute(require("api/login/post"))
    .use(authenticate());
    // .convroute(require("api/apps/:id/stages/:name/config/put"));
