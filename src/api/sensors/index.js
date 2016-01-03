import collection from "lk-collection-convexpress";

import dispatchEvent from "common/dispatch-event";
import findElement from "common/find-element";
import * as authorize from "./authorize";
import schema from "./schema";

export default collection({
    name: "sensors",
    dispatchEvent,
    authorize,
    schema,
    findElement
});
