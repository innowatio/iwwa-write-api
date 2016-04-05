import chai, {expect} from "chai";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

import mongodb from "services/mongodb";
import {siteMock, sensorsIds} from "../../mocks";

import {getSensorsIds, findSensorsOnDB} from "api/sites/utils";

describe("sites `utils`", () => {

    var db;

    before(async () => {
        db = await mongodb;

        sensorsIds.forEach(id => {
            db.collection("sensors").insert({
                _id: id,
                name: "sensor" + id
            });
        });
    });

    after(async () => {
        await db.collection("sensors").remove({});
        await db.dropCollection("sensors");
    });

    describe("`getSensorsIds` function", () => {
        it("returns the list of all sensors id", () => {
            expect(getSensorsIds(siteMock.children)).to.deep.equals(sensorsIds);
        });
    });

    describe("`findSensorsOnDB` function", () => {

        it("should return all the objects on DB", async () => {

            const expected = [
                {_id: "POD1"},
                {_id: "POD2"},
                {_id: "SENSOR1-1"},
                {_id: "SENSOR1-1-1"},
                {_id: "SENSOR1-1-2"},
                {_id: "SENSOR1-2"},
                {_id: "SENSOR1-3"},
                {_id: "SENSOR1-3-1"},
                {_id: "SENSOR2-1"}
            ];

            const result = await findSensorsOnDB(sensorsIds);

            expect(result).to.deep.equals(expected);
        });
    });
});
