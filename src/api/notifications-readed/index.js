import collection from "lk-collection-convexpress";

import dispatchEvent from "services/dispatcher";
import * as authorize from "./authorize";
import schema from "./schema";

export default collection({
    name: "notifications-readed",
    dispatchEvent,
    authorize,
    schema
});
