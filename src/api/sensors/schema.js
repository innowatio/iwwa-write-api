export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "variable": {
            "type": "object",
            "properties": {
                "symbol": {
                    "type": "string"
                },
                "sensorId": {
                    "type": "string"
                },
                "measurementType": {
                    "type": "string"
                }
            },
            "required": [
                "symbol",
                "sensorId",
                "measurementType"
            ],
            "additionalProperties": false
        },
        "formula": {
            "type": "object",
            "properties": {
                "formula": {
                    "type": "string"
                },
                "variables": {
                    "type": "array",
                    "uniqueItems": true,
                    "items": {
                        "$ref": "#/definitions/variable"
                    }
                },
                "start": {
                    "type": "string",
                    "format": "date-time"
                },
                "end": {
                    "type": "string",
                    "format": "date-time"
                },
                "measurementType": {
                    "type": "string"
                },
                "measurementUnit": {
                    "type": "string"
                },
                "measurementSample": {
                    "type": "integer",
                    "minimum": 60000,
                    "maximum": 21600000
                },
                "aggregationType": {
                    "type": "string",
                    "enum": [
                        "average",
                        "difference",
                        "max",
                        "min",
                        "newest",
                        "oldest",
                        "sum"
                    ]
                }
            },
            "required": [
                "formula",
                "variables",
                "start",
                "end",
                "measurementType",
                "measurementUnit",
                "measurementSample"
            ],
            "additionalProperties": false
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
        "siteReference": {
            "type": "string"
        },
        "userReference": {
            "type": "string"
        },
        "userId": {
            "type": "string"
        },
        "parentSensorId": {
            "type": "string"
        },
        "unitOfMeasurement": {
            "type": "string"
        },
        "aggregationType": {
            "type": "string",
            "enum": [
                "average",
                "difference",
                "max",
                "min",
                "newest",
                "oldest",
                "sum"
            ]
        }
    },
    "required": [
        "id",
        "name"
    ],
    "additionalProperties": false
};
