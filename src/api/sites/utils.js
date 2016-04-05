import {flatten, isNil} from "ramda";

import mongodb from "services/mongodb";

export async function findSensorsOnDB (sensorsIds) {
    const db = await mongodb;
    return db.collection("sensors").find({"_id": {$in: sensorsIds}}, {"_id": 1}).toArray();
}

export function getSensorsIds (children) {
    const ids = findIds(children);
    return flatten(ids).filter(id => !isNil(id));
}

function findIds (children) {
    if (children) {
        return children.map(child => {
            return [child.id].concat(findIds(child.children));
        });
    } else {
        return [];
    }
}
