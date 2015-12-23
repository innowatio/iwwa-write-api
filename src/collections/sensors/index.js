import collection from "lk-collection-express";

import * as config from "../../config";
import findElement from "../../utils/find-element";
import * as authorize from "./authorize";
import schema from "./schema";

export default collection({
    name: "sensors",
    kinesisStream: config.KINESIS_STREAM_NAME,
    authorize,
    schema,
    findElement
});
