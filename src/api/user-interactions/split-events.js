import {map} from "bluebird";
import {v4} from "node-uuid";

import {ACTION_INSERT_INTERACTION} from "config";
import dispatchEvent from "services/dispatcher";

function convert (body) {
    return body.interactions.map(interaction => {
        return {
            element: {
                id: v4(),
                userId: body.userId,
                details: body.details,
                ...interaction
            }
        };
    });
}

export default async function (body) {
    return await map(convert(body.element), (body) => {
        dispatchEvent(ACTION_INSERT_INTERACTION, body);
    });
}
