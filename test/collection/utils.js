import chai, {expect} from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

import * as utils from "../../src/collection/utils";

describe("putRecord", () => {

    const kinesis = {
        putRecord: sinon.stub().returns(Promise.resolve())
    };
    const KINESIS_STREAM_NAME = "KINESIS_STREAM_NAME";
    var clock;

    beforeEach(() => {
        utils.__Rewire__("kinesis", kinesis);
        utils.__Rewire__("KINESIS_STREAM_NAME", KINESIS_STREAM_NAME);
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        utils.__ResetDependency__("kinesis");
        utils.__ResetDependency__("KINESIS_STREAM_NAME");
        clock.restore();
    });

    it("should call the `putRecord` function of `kinesis` with the correct parameter", () => {
        const event = {
            id: "id",
            data: {
                id: "id",
                element: "element"
            },
            timestamp: new Date().toISOString(),
            type: `element inserted in collection readings`
        };
        const req = {
            body: {},
            collection: "readings",
            elementId: "elementId",
            log: {
                info: sinon.spy()
            }
        };
        return utils.putRecord(req, event)
            .then(() => {
                expect(kinesis.putRecord).to.have.callCount(1);
                expect(kinesis.putRecord.getCall(0).args[0]).to.deep.equal({
                    Data: `{"id":"id","data":{"id":"id","element":"element"},"timestamp":"1970-01-01T00:00:00.000Z","type":"element inserted in collection readings"}`,
                    PartitionKey: "readings",
                    StreamName: KINESIS_STREAM_NAME
                });
            });
    });

    it("should call the `info` function of `req.log` with the correct parameter", () => {
        const event = {
            id: "id",
            data: {
                id: "id",
                element: "element"
            },
            timestamp: new Date().toISOString(),
            type: `element inserted in collection readings`
        };
        const req = {
            body: {},
            collection: "readings",
            elementId: "elementId",
            log: {
                info: sinon.spy()
            }
        };
        return utils.putRecord(req, event)
            .then(() => {
                expect(req.log.info).to.have.callCount(1);
                expect(req.log.info).to.have.been.calledWith(
                    {event},
                    "Event put into kinesis stream"
                );
            });
    });

});
