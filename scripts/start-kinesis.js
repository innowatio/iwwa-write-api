import kinesalite from "kinesalite";

import * as config from "config";
import kinesis from "services/kinesis";
import log from "services/logger";

const kinesisServer = kinesalite({
    createStreamMs: 0
});

kinesisServer.listen(4567, async (err) => {

    log.info("Kinesis server started");
    const streamName = config.KINESIS_STREAM_NAME;

    const streams = await kinesis.listStreamsAsync();
    if (!streams.StreamNames.find(x => x === streamName)) {
        log.info(`Creating Kinesis stream with name '${streamName}'`);
        await kinesis.createStreamAsync({
            ShardCount: 2,
            StreamName: streamName
        });
    }

    if (err) {
        log.error({err}, "Error starting Kinesis");
        process.exit(1);
    }
});
