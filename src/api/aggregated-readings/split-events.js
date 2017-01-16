import {map} from "bluebird";
import R from "ramda";

import {ACTION_INSERT_READING} from "config";
import dispatchEvent from "services/dispatcher";

function getMeasurementsAt (measurements, dateAndSource) {
    return R.pipe(
        R.filter(measurement => measurement.source === dateAndSource.source),
        R.map(measurement => {
            return {
                type: measurement.type,
                value: measurement.values[R.indexOf(dateAndSource.date, measurement.dates)],
                unitOfMeasurement: measurement.unitOfMeasurement
            };
        }),
        R.filter(m => !R.isNil(m.value))
    )(measurements);
}
function convert (body) {
    const allDates = R.uniq(
        R.flatten(
            body.measurements.map(measurement => {
                return measurement.dates.map(date => {
                    return {
                        date,
                        source: measurement.source
                    };
                });
            })
        )
    ).sort((x, y) => x.date - y.date);

    return R.pipe(
        R.map(dateAndSource => {
            return {
                sensorId: body.sensorId,
                date: dateAndSource.date,
                source: dateAndSource.source,
                measurements: getMeasurementsAt(body.measurements, dateAndSource)
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
