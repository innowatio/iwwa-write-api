export const siteMock = {
    "id": "site1",
    "name": "site 1 name",
    "children": [{
        "id": "POD1",
        "children": [{
            "id": "SENSOR1-1",
            "children": [{
                "id": "SENSOR1-1-1",
                "children": [{}]
            }, {
                "id": "SENSOR1-1-2",
                "children": [{}]
            }]
        }, {
            "id": "SENSOR1-2",
            "children": [{}]
        }, {
            "id": "SENSOR1-3",
            "children": [{
                "id": "SENSOR1-3-1",
                "children": [{}]
            }]
        }]
    }, {
        "id": "POD2",
        "children": [{
            "id": "SENSOR2-1",
            "children": [{}]
        }]
    }]
};

export const sensorsIds = [
    "POD1", "SENSOR1-1", "SENSOR1-1-1", "SENSOR1-1-2", "SENSOR1-2",
    "SENSOR1-3", "SENSOR1-3-1", "POD2", "SENSOR2-1"
];
