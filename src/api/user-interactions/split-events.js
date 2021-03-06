import {map} from "bluebird";
import {v4} from "node-uuid";

import {ACTION_INSERT_INTERACTION} from "config";
import dispatchEvent from "services/dispatcher";

function convert (body) {
    return body.interactions.map(interaction => {
        return {
            id: v4(),
            element: {
                visitId: body.visitId,
                userId: body.userId,
                details: body.details,
                ...interaction
            }
        };
    });
}

export default async function (body) {
    return await map(convert(body.element), async (body) => {
        await dispatchEvent(ACTION_INSERT_INTERACTION, body);
    });
}
