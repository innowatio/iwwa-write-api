import collection from "lk-collection-convexpress";

import dispatchEvent from "services/dispatcher";
import schema from "./schema";

export default collection({
    name: "favorite-charts",
    dispatchEvent,
    schema
});
