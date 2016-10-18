import collection from "lk-collection-convexpress";

import findElement from "common/find-element";
import dispatchEvent from "services/dispatcher";
import * as authorize from "./authorize";
import schema from "./schema";

export default collection({
    name: "alarms",
    dispatchEvent,
    authorize,
    schema,
    findElement
});
