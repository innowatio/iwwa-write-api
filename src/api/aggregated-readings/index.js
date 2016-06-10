import collection from "lk-collection-convexpress";

import * as authorize from "./authorize";
import schema from "./schema";
import splitEvents from "./split-events";

export default collection({
    name: "aggregated-readings",
    dispatchEvent,
    authorize,
    schema
});

async function dispatchEvent () {
    await splitEvents(arguments[1]);
}
