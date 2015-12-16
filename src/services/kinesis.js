import {Kinesis} from "aws-sdk";
import {promisify} from "bluebird";

const kinesis = new Kinesis({
    apiVersion: "2013-12-02"
});

export const putRecord = promisify(kinesis.putRecord, {context: kinesis});
