import collection from "lk-collection-convexpress";

import * as authorize from "./authorize";
import schema from "./schema";
import findElement from "./utils";
import dispatchEvent from "services/dispatcher";

export default collection({
    name: "users",
    dispatchEvent,
    authorize,
    schema,
    findElement
});

