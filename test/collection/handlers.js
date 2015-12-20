import chai, {expect} from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

import * as handlers from "../../src/collection/handlers";

describe("`insert` function", () => {

    const putRecord = sinon.stub().returns(Promise.resolve());
    const v4 = () => "id";
    var clock;

    beforeEach(() => {
        putRecord.reset();
        handlers.__Rewire__("putRecord", putRecord);
        handlers.__Rewire__("v4", v4);
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        handlers.__ResetDependency__("putRecord");
        handlers.__ResetDependency__("v4");
        clock.restore();
    });

    it("should call `putRecord` function with correct parameters if elementId is defined", () => {
        const req = {
            body: {
                id: "elementId"
            },
            collection: "readings",
            elementId: "elementId"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.insert(req, res)
            .then(() => {
                expect(putRecord).to.have.callCount(1);
                expect(putRecord.getCall(0).args[0]).to.equal(req);
                expect(putRecord.getCall(0).args[1]).to.deep.equal({
                    id: "id",
                    data: {
                        id: "elementId",
                        element: {}
                    },
                    timestamp: "1970-01-01T00:00:00.000Z",
                    type: "element inserted in collection readings"
                });
            });
    });

    it("should call `putRecord` function with correct parameters if elementId is not defined", () => {
        const req = {
            body: {
                id: "elementId"
            },
            collection: "readings"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.insert(req, res)
            .then(() => {
                expect(putRecord).to.have.callCount(1);
                expect(putRecord.getCall(0).args[0]).to.equal(req);
                expect(putRecord.getCall(0).args[1]).to.deep.equal({
                    id: "id",
                    data: {
                        id: "id",
                        element: {}
                    },
                    timestamp: "1970-01-01T00:00:00.000Z",
                    type: "element inserted in collection readings"
                });
            });
    });

    it("should call `status` function in `res` with 201", () => {
        const req = {
            body: {
                id: "elementId"
            },
            collection: "readings",
            elementId: "elementId"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.insert(req, res)
            .then(() => {
                expect(res.status).to.have.callCount(1);
                expect(res.status).to.have.been.calledWith(201);
            });
    });

    it("should call `send` function in `res` with `id`", () => {
        const req = {
            body: {
                id: "elementId"
            },
            collection: "readings",
            elementId: "elementId"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.insert(req, res)
            .then(() => {
                expect(res.send).to.have.callCount(1);
                expect(res.send).to.have.been.calledWith({id: "elementId"});
            });
    });

});

describe("`replace` function", () => {

    const putRecord = sinon.stub().returns(Promise.resolve());
    const v4 = () => "id";
    var clock;

    beforeEach(() => {
        putRecord.reset();
        handlers.__Rewire__("putRecord", putRecord);
        handlers.__Rewire__("v4", v4);
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        handlers.__ResetDependency__("putRecord");
        handlers.__ResetDependency__("v4");
        clock.restore();
    });

    it("should call `putRecord` function with correct parameters", () => {
        const req = {
            body: {
                id: "elementId"
            },
            collection: "readings",
            elementId: "elementId"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.replace(req, res)
            .then(() => {
                expect(putRecord).to.have.callCount(1);
                expect(putRecord.getCall(0).args[0]).to.equal(req);
                expect(putRecord.getCall(0).args[1]).to.deep.equal({
                    id: "id",
                    data: {
                        id: "elementId",
                        element: {}
                    },
                    timestamp: "1970-01-01T00:00:00.000Z",
                    type: "element replaced in collection readings"
                });
            });
    });

    it("should call `status` function in `res` with 201", () => {
        const req = {
            body: {
                id: "elementId"
            },
            collection: "readings",
            elementId: "elementId"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.replace(req, res)
            .then(() => {
                expect(res.status).to.have.callCount(1);
                expect(res.status).to.have.been.calledWith(204);
            });
    });

    it("should call `send` function in `res`", () => {
        const req = {
            body: {
                id: "elementId"
            },
            collection: "readings",
            elementId: "elementId"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.insert(req, res)
            .then(() => {
                expect(res.send).to.have.callCount(1);
                expect(res.send).to.have.been.calledWith();
            });
    });

});

describe("`remove` function", () => {

    const putRecord = sinon.stub().returns(Promise.resolve());
    const v4 = () => "id";
    var clock;

    beforeEach(() => {
        putRecord.reset();
        handlers.__Rewire__("putRecord", putRecord);
        handlers.__Rewire__("v4", v4);
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        handlers.__ResetDependency__("putRecord");
        handlers.__ResetDependency__("v4");
        clock.restore();
    });

    it("should call `putRecord` function with correct parameters", () => {
        const req = {
            collection: "readings",
            elementId: "elementId"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.remove(req, res)
            .then(() => {
                expect(putRecord).to.have.callCount(1);
                expect(putRecord.getCall(0).args[0]).to.equal(req);
                expect(putRecord.getCall(0).args[1]).to.deep.equal({
                    id: "id",
                    data: {
                        id: "elementId"
                    },
                    timestamp: "1970-01-01T00:00:00.000Z",
                    type: "element removed in collection readings"
                });
            });
    });

    it("should call `status` function in `res` with 201", () => {
        const req = {
            body: {
                id: "elementId"
            },
            collection: "readings",
            elementId: "elementId"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.replace(req, res)
            .then(() => {
                expect(res.status).to.have.callCount(1);
                expect(res.status).to.have.been.calledWith(204);
            });
    });

    it("should call `send` function in `res`", () => {
        const req = {
            body: {
                id: "elementId"
            },
            collection: "readings",
            elementId: "elementId"
        };
        const res = {
            status: sinon.spy(() => res),
            send: sinon.spy()
        };
        return handlers.insert(req, res)
            .then(() => {
                expect(res.send).to.have.callCount(1);
                expect(res.send).to.have.been.calledWith();
            });
    });

});
