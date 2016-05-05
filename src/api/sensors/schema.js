export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "id": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "measurementsDeltaInMs": {
            "type": "integer",
            "minimumu": 10000
        },
        "unitOfMeasurement": {
            "type": "string"
        },
        "virtual": {
            "type": "boolean"
        },
        "formula": {
            "type": "string"
        },
        "tags": {
            "type": "array",
            "uniqueItems": true,
            "items": {
                "type": "string"
            }
        },
        "siteId": {
            "type": "string"
        },
        "userId": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "id",
        "name",
        "type"
    ]
};
