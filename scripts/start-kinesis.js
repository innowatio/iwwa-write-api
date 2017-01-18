import kinesalite from "kinesalite";

import log from "services/logger";

const server = kinesalite({
    path: "./kinesis-db",
    createStreamMs: 0
});

server.listen(4567, (err) => {
    if (err) {
        log.error("Error starting kinesis");
        log.error(err.stack);
        process.exit(1);
    }
});
