export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "sensorId": {
            "type": "string"
        },
        "measurements": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "dates": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "format": "date-time"
                        }
                    },
                    "type": {
                        "type": "string"
                    },
                    "source": {
                        "type": "string",
                        "enum": [
                            "forecast",
                            "reading",
                            "reference"
                        ]
                    },
                    "values": {
                        "type": "array",
                        "items": {
                            "type": "number"
                        }
                    },
                    "unitOfMeasurement": {
                        "type": "string"
                    }
                },
                "required": [
                    "dates",
                    "type",
                    "source",
                    "values",
                    "unitOfMeasurement"
                ]
            }
        }
    },
    "required": [
        "sensorId",
        "measurements"
    ]
};
