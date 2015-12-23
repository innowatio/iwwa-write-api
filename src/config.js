import {readFileSync} from "fs";
import {hostname} from "os";

export const NODE_ENV = process.env.NODE_ENV || "development";
export const MONGODB_URL = process.env.MONGODB_URL;
export const PORT = process.env.PORT || 4000;
export const KINESIS_STREAM_NAME = process.env.KINESIS_STREAM_NAME;

const commit = readFileSync(`${process.cwd()}/COMMIT`);
export const PROVIDER_ID = `iwwa-write-api::${commit}::${hostname()}`;

export const AWS_CLOUDWATCH_GROUP = "iwwa-write-api";
export const AWS_CLOUDWATCH_STREAM = PROVIDER_ID;
export const AWS_CLOUDWATCH_REGION = process.env.AWS_CLOUDWATCH_REGION;
