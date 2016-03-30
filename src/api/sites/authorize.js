import {getSensorsIds, findSensorsOnDB} from "./utils";

export async function insert (user, body) {
    return {
        authorized: await checkSensorIds(body)
    };
}

export async function replace (user, body) {
    return {
        authorized: await checkSensorIds(body)
    };
}

export async function remove (user, body) {
    return {
        authorized: await checkSensorIds(body)
    };
}

async function checkSensorIds (site) {
    const ids = getSensorsIds(site.children);
    const onDB = await findSensorsOnDB(ids);
    const idsOnDB = onDB.map(sensor => sensor._id);

    // each given id is already on sensors collection
    return ids.every(id => idsOnDB.indexOf(id) > -1);
}
