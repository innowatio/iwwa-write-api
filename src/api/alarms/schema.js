export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "alarm": {
            "type": "object",
            "properties": {
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
                }
            },
            "additionalProperties": false,
            "required": [
                "userId",
                "sensorId",
                "rule",
                "type",
                "threshold",
                "thresholdRule",
                "unitOfMeasurement",
                "measurementType"
            ]
        }
    }
};
