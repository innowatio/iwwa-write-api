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
                },
                "sampleDeltaInMS": {
                    "type": "integer",
                    "minimum": 60000,
                    "maximum": 21600000
                }
            },
            "required": ["formula", "start", "end", "variables", "measurementType", "sampleDeltaInMS"]
        },
        "measurementInfo": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string"
                },
                "tags": {
                    "type": "array",
                    "minItems": 1,
                    "uniqueItems": true,
                    "items": {
                        "type": "string"
                    }
                },
                "primaryTags": {
                    "type": "array",
                    "minItems": 1,
                    "uniqueItems": true,
                    "items": {
                        "type": "string"
                    }
                },
                "description": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "unitOfMeasurement": {
                    "type": "string"
                }
            },
            "required": ["type"],
            "anyOf": [{
                "required": ["tags"]
            }, {
                "required": ["primaryTags"]
            }, {
                "required": ["description"]
            }, {
                "required": ["name"]
            }, {
                "required": ["unitOfMeasurement"]
            }],
            "additionalProperties": false
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
        "measurementsInfo": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/measurementInfo"
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
        },
        "aggregationType": {
            "type": "string",
            "enum": [
                "average",
                "lastValue",
                "sum"
            ]
        }
    },
    "additionalProperties": false,
    "required": [
        "id",
        "name"
    ]
};
