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
        "virtual": {
            "type": "boolean"
        },
        "source": {
            "type": "string",
            "enum": ["forecast", "reading"]
        },
        "measurements": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "enum": ["activeEnergy", "reactiveEnergy", "maxPower", "temperature", "humidity", "illuminance", "co2"]
                    },
                    "source": {
                        "type": "string",
                        "enum": ["forecast", "reading"]
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
                ]
            }
        }
    },
    "required": [
        "sensorId",
        "date",
        "measurements"
    ]
};
