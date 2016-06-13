import collection from "lk-collection-convexpress";
import * as authorize from "./authorize";
import dispatchEvent from "services/dispatcher";
import schema from "./schema";

export default collection({
    name: "favorite-charts",
    dispatchEvent,
    authorize,
    schema
});
