import collection from "lk-collection-convexpress";

import splitEvents from "split-events";
import * as authorize from "./authorize";
import schema from "./schema";

export default collection({
    name: "user-interactions",
    customDispatcher,
    authorize,
    schema
});

async function customDispatcher () {
    await splitEvents(arguments[1]);
}
