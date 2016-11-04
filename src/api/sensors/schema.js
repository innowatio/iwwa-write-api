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
                },
                "variables": {
                    "type": "array",
                    "uniqueItems": true,
                    "items": {
                        "type": "string"
                    }
                },
                "measurementType": {
                    "type": "array",
                    "uniqueItems": true,
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": ["formula", "start", "end", "variables", "measurementType"]
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
        "primaryTags": {
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
        },
        "createdByUser": {
            "type": "boolean"
        }
    },
    "additionalProperties": false,
    "required": [
        "id",
        "name"
    ]
};
