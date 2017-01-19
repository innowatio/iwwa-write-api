import retry from "async-retry";

import getDispatch from "lk-dispatch";

import * as config from "config";
import kinesis from "services/kinesis";
import log from "services/logger";

let dispatcherInstance;

function getInstance () {
    if (!dispatcherInstance) {
        dispatcherInstance = getDispatch({
            kinesisClient: kinesis,
            kinesisStream: config.KINESIS_STREAM_NAME,
            producerId: config.SERVER_ID
        });
    }
    return dispatcherInstance;
}

export async function dispatchEvent (eventType, eventData, eventOptions, attemptCount = 0) {

    log.debug({
        attemptCount,
        eventType
    });

    const dispatch = getInstance();
    await dispatch(eventType, eventData, eventOptions);
}

export default async function retryDispatch (eventType, eventData, eventOptions = {}) {
    let attemptCount = 0;

    return await retry(async () => {
        await dispatchEvent(eventType, eventData, eventOptions, attemptCount++);
    }, {
        retries: 10
    });
}
