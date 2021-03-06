import {hostname} from "os";

export const NODE_ENV = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT || 4000;
export const HOSTNAME = process.env.HOSTNAME || "localhost";
export const HOST = `${HOSTNAME}:${PORT}`;

export const SERVER_ID = `iwwa-write-api@${hostname()}`;
export const AWS_CLOUDWATCH_GROUP = "iwwa-write-api";
export const AWS_CLOUDWATCH_STREAM = SERVER_ID;
export const AWS_CLOUDWATCH_REGION = process.env.AWS_CLOUDWATCH_REGION;
export const LOG_LEVEL = process.env.LOG_LEVEL || "info";

export const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/test";

export const KINESIS_REGION = process.env.KINESIS_REGION || "us-west-1";
export const KINESIS_ENDPOINT = (
    NODE_ENV !== "development" ?
    `https://kinesis.${KINESIS_REGION}.amazonaws.com` :
    "http://localhost:4567"
);
export const KINESIS_STREAM_NAME = process.env.KINESIS_STREAM_NAME || "entrypoint";

export const JWT_SECRET = new Buffer(
    process.env.JWT_SECRET || new Buffer("JWT_SECRET").toString("base64"),
    "base64"
);
export const JWT_ISSUER = "iwwa-write-api";


// ACTIONS

export const ACTION_INSERT_READING = "element inserted in collection readings";
export const ACTION_INSERT_INTERACTION = "element inserted in collection user-interactions";
