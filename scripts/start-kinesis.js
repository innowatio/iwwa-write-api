import kinesalite from "kinesalite";

const server = kinesalite({
    path: "./kinesis-db",
    createStreamMs: 0
});

server.listen(4567, (err) => {
    if (err) {
        console.log("Error starting kinesis");
        console.log(err.stack);
        process.exit(1);
    }
});
