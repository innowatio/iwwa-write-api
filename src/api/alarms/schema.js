export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "alarm": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "userId": {
                    "type": "string"
                },
                "sensorId": {
                    "type": "string"
                },
                "rule": {
                    "type": "string"
                },
                "type": {
                    "type": "string",
                    "enum": ["realtime", "daily", "monthly"]
                },
                "thresholdRule": {
                    "type": "string"
                },
                "threshold": {
                    "type": "number"
                },
                "unitOfMeasurement": {
                    "type": "string"
                },
                "measurementType": {
                    "type": "string"
                },
                "email": {
                    "type": "boolean"
                }
            },
            "additionalProperties": false,
            "required": [
                "name",
                "userId",
                "sensorId",
                "rule",
                "type",
                "threshold",
                "thresholdRule",
                "unitOfMeasurement",
                "measurementType",
                "email"
            ]
        }
    }
};
