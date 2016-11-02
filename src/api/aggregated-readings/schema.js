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
                        "type": "string",
                        "enum": [
                            "activeEnergy",
                            "co2",
                            "current",
                            "db",
                            "energy",
                            "gas",
                            "humidity",
                            "illuminance",
                            "maxPower",
                            "operationLoad",
                            "operationMode",
                            "power",
                            "price",
                            "reactiveEnergy",
                            "rh",
                            "temperature"
                        ]
                    },
                    "source": {
                        "type": "string",
                        "enum": ["forecast", "reading"]
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
