import chai, {expect} from "chai";
import chaiAsPromised from "chai-as-promised";
import R from "ramda";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(chaiAsPromised);
chai.use(sinonChai);

import splitEvents from "api/aggregated-readings/split-events";

describe("aggregated-readings convert", () => {

    const convert = splitEvents.__get__("convert");

    var clock;
    const v4 = R.always("id");

    before(() => {
        splitEvents.__Rewire__("v4", v4);
        clock = sinon.useFakeTimers();
    });
    after(() => {
        splitEvents.__ResetDependency__("v4");
        clock.restore();
    });

    it("returns the disgregated array of readings", () => {
        const startingTime = new Date("2015-01-01").getTime();
        const delta = 5 * 60 * 1000;
        const getOffsetDate = (offset) => {
            return new Date(startingTime + (offset * delta)).toISOString();
        };
        const body = {
            sensorId: "sensorId",
            measurements: [
                {
                    type: "activeEnergy",
                    source: "forecast",
                    values: [1, 5, 8, 1000],
                    dates: [getOffsetDate(0), getOffsetDate(3), getOffsetDate(5), getOffsetDate(7)],
                    unitOfMeasurement: "kWh"
                },
                {
                    type: "maxPower",
                    source: "forecast",
                    values: [6, 5],
                    dates: [getOffsetDate(3), getOffsetDate(4)],
                    unitOfMeasurement: "kW"
                }
            ]
        };
        const readings = convert(body);
        expect(readings).to.deep.equal([
            {
                element: {
                    sensorId: "sensorId",
                    date: "2015-01-01T00:00:00.000Z",
                    measurements: [{
                        type: "activeEnergy",
                        source: "forecast",
                        value: 1,
                        unitOfMeasurement: "kWh"
                    }]
                }
            },
            {
                element: {
                    sensorId: "sensorId",
                    date: "2015-01-01T00:15:00.000Z",
                    measurements: [
                        {
                            type: "activeEnergy",
                            source: "forecast",
                            value: 5,
                            unitOfMeasurement: "kWh"
                        },
                        {
                            type: "maxPower",
                            source: "forecast",
                            value: 6,
                            unitOfMeasurement: "kW"
                        }
                    ]
                }
            },
            {
                element: {
                    sensorId: "sensorId",
                    date: "2015-01-01T00:20:00.000Z",
                    measurements: [{
                        type: "maxPower",
                        source: "forecast",
                        value: 5,
                        unitOfMeasurement: "kW"
                    }]
                }
            },
            {
                element: {
                    sensorId: "sensorId",
                    date: "2015-01-01T00:25:00.000Z",
                    measurements: [{
                        type: "activeEnergy",
                        source: "forecast",
                        value: 8,
                        unitOfMeasurement: "kWh"
                    }]
                }
            },
            {
                element: {
                    sensorId: "sensorId",
                    date: "2015-01-01T00:35:00.000Z",
                    measurements: [{
                        type: "activeEnergy",
                        source: "forecast",
                        value: 1000,
                        unitOfMeasurement: "kWh"
                    }]
                }
            }
        ]);
    });

});
