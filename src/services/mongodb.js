import {MongoClient} from "mongodb";

import * as config from "config";

export default MongoClient.connect(config.MONGODB_URL);
