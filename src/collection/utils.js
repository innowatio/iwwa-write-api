import {KINESIS_STREAM_NAME} from "../config";
import mongodb from "../services/mongodb";
import * as kinesis from "../services/kinesis";

export async function putRecord (req, event) {
    await kinesis.putRecord({
        Data: JSON.stringify(event),
        PartitionKey: req.collection,
        StreamName: KINESIS_STREAM_NAME
    });
    req.log.info({event}, "Event put into kinesis stream");
}

export async function exists (collection, _id) {
    const db = await mongodb;
    const count = db.collection(collection).find({_id}).limit(1).count(true);
    return (await count > 0);
}

export async function find (collection, _id) {
    const db = await mongodb;
    return db.collection(collection).findOne({_id});
}
