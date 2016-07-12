import {map} from "bluebird";

import {ACTION_INSERT_INTERACTION} from "config";
import dispatchEvent from "services/dispatcher";

function convert (body) {
    return body.interactions.map(interation => {
        return {
            element: {
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
