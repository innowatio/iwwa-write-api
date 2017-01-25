export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "sensorId": {
            "type": "string"
        },
        "date": {
            "type": "string",
            "format": "date-time"
        },
        "source": {
            "type": "string",
            "enum": [
                "forecast",
                "reading",
                "reference"
            ]
        },
        "measurements": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string"
                    },
                    "value": {
                        "type": "number"
                    },
                    "unitOfMeasurement": {
                        "type": "string"
                    }
                },
                "required": [
                    "type",
                    "value",
                    "unitOfMeasurement"
                ],
                "additionalProperties": false
            }
        }
    },
    "required": [
        "sensorId",
        "date",
        "measurements"
    ],
    "additionalProperties": false
};
