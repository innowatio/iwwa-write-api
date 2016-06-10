import {map} from "bluebird";
import R from "ramda";

import {ACTION_INSERT_READING} from "config";
import dispatchEvent from "services/dispatcher";

function getMeasurementsAt (measurements, dateTime) {
    return R.pipe(
        R.map(m => ({
            type: m.type,
            source: m.source,
            value: m.values[R.indexOf(dateTime, m.dates)],
            unitOfMeasurement: m.unitOfMeasurement
        })),
        R.filter(m => !R.isNil(m.value))
    )(measurements);
}
function convert (body) {
    const allDates = R.uniq(
        R.flatten(
            body.measurements.map(m => m.dates)
        )
    ).sort();

    return R.pipe(
        R.map(dateTime => {
            return {
                sensorId: body.sensorId,
                date: dateTime,
                measurements: getMeasurementsAt(body.measurements, dateTime)
            };
        }),
        R.filter(reading => !R.isEmpty(reading.measurements)),
        R.map(reading => ({
            element: reading
        }))
    )(allDates);
}

export default async function finalStep (body) {
    return await map(convert(body.element), (body) => {
        dispatchEvent(ACTION_INSERT_READING, body);
    });
}
