import AWS, {Kinesis} from "aws-sdk";
import {promisifyAll} from "bluebird";

import * as config from "config";

if (config.NODE_ENV === "development") {
    AWS.config.update({
        accessKeyId: "accessKeyId",
        secretAccessKey: "secretAccessKey"
    });
}

const kinesis = new Kinesis({
    apiVersion: "2013-12-02",
    endpoint: config.KINESIS_ENDPOINT,
    region: config.KINESIS_REGION
});
export default promisifyAll(kinesis);
