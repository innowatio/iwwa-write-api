import {map} from "bluebird";
import {expect} from "chai";

import mongodb from "services/mongodb";
import {siteMock, sensorsIds} from "../../mocks";

import {insert, replace, remove} from "api/sites/authorize";

describe("sites operation", () => {

    var db;

    before(async () => {
        db = await mongodb;
    });

    after(async () => {
        await db.collection("sensors").remove({});
        await db.dropCollection("sensors");
    });

    beforeEach(async () => {
        // all except 1st id
        const ids = sensorsIds.slice(1, sensorsIds.length);
        await map(ids, id => db.collection("sensors").insert({
            _id: id,
            name: "sensor" + id
        }));
    });

    afterEach(async () => {
        await db.collection("sensors").remove({});
    });


    describe("is authorized if ", () => {
        it("all children sensors ids are on DB", async () => {
            db.collection("sensors").insert({
                _id: sensorsIds[0],
                name: "sensor" + sensorsIds[0]
            });

            expect({authorized: true}).to.deep.equal(await insert({}, siteMock));
            expect({authorized: true}).to.deep.equal(await replace({}, siteMock));
            expect({authorized: true}).to.deep.equal(await remove({}, siteMock));
        });
    });

    describe("is not authorized if ", () => {
        it("not all children sensors ids are on DB", async () => {

            expect({authorized: false}).to.deep.equal(await insert({}, siteMock));
            expect({authorized: false}).to.deep.equal(await replace({}, siteMock));
            expect({authorized: false}).to.deep.equal(await remove({}, siteMock));
        });
    });
});
