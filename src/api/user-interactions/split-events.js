import {map} from "bluebird";
import {v4} from "node-uuid";

import {ACTION_INSERT_INTERACTION} from "config";
import dispatchEvent from "services/dispatcher";

function convert (body) {
    return body.interactions.map(interation => {
        return {
            element: {
                id: v4(),
                userId: body.userId,
                ...interation
            }
        };
    });
}

export default async function (body) {
    return await map(convert(body.element), (body) => {
        dispatchEvent(ACTION_INSERT_INTERACTION, body);
    });
}
