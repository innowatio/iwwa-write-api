export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "formula": {
            "type": "object",
            "properties": {
                "formula": {
                    "type": "string"
                },
                "start": {
                    "type": "string",
                    "format": "date-time"
                },
                "end": {
                    "type": "string",
                    "format": "date-time"
                }
            },
            "required": ["formula", "start", "end"]
        }
    },
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
        "shortDescription": {
            "type": "string"
        },
        "sampleDeltaInMS": {
            "type": "integer",
            "minimum": 10000
        },
        "unitOfMeasurement": {
            "type": "string"
        },
        "virtual": {
            "type": "boolean"
        },
        "formulas": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/formula"
            }
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
        },
        "parentSensorId": {
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
