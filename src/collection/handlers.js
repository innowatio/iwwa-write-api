import {v4} from "node-uuid";

import {putRecord} from "./utils";

export async function insert (req, res) {
    const {body, collection, elementId} = req;
    const element = body;
    const id = elementId || v4();
    delete element.id;
    await putRecord(req, {
        id: v4(),
        data: {id, element},
        timestamp: new Date().toISOString(),
        type: `element inserted in collection ${collection}`
    });
    res.status(201).send({id});
}

export async function replace (req, res) {
    const {body, collection, elementId} = req;
    const element = body;
    const id = elementId;
    delete element.id;
    await putRecord(req, {
        id: v4(),
        data: {id, element},
        timestamp: new Date().toISOString(),
        type: `element replaced in collection ${collection}`
    });
    res.status(204).send();
}

export async function remove (req, res) {
    const {collection, elementId} = req;
    const id = elementId;
    await putRecord(req, {
        id: v4(),
        data: {id},
        timestamp: new Date().toISOString(),
        type: `element removed in collection ${collection}`
    });
    res.status(204).send();
}
