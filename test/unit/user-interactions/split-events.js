import chai, {expect} from "chai";
import chaiAsPromised from "chai-as-promised";
import R from "ramda";
import sinonChai from "sinon-chai";

chai.use(chaiAsPromised);
chai.use(sinonChai);

import splitEvents from "api/user-interactions/split-events";

describe("convert", () => {

    const convert = splitEvents.__get__("convert");

    const v4 = R.always("id");

    before(() => {
        splitEvents.__Rewire__("v4", v4);
    });
    after(() => {
        splitEvents.__ResetDependency__("v4");
    });

    it("returns the disgregated array of readings", () => {

        const body = {
            userId: "thisUserId",
            interactions: [
                {
                    type: "interaction1",
                    timestamp: "2016-01-01T00:01:00.000Z",
                    body: {
                        key1: "value1",
                        key2: 2
                    }
                },
                {
                    type: "interaction2",
                    timestamp: "2016-01-01T00:02:00.000Z",
                    body: {
                        key1: "value2",
                        key2: 4
                    }
                }
            ]
        };
        const readings = convert(body);
        expect(readings).to.deep.equal([
            {
                element: {
                    userId: "thisUserId",
                    timestamp: "2016-01-01T00:01:00.000Z",
                    type: "interaction1",
                    body: {
                        key1: "value1",
                        key2: 2
                    }
                }
            },
            {
                element: {
                    userId: "thisUserId",
                    timestamp: "2016-01-01T00:02:00.000Z",
                    type: "interaction2",
                    body: {
                        key1: "value2",
                        key2: 4
                    }
                }
            }
        ]);
    });

});
