export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "alarm": {
            "type": "object",
            "properties": {
                "user_id": {
                    "type": "string"
                },
                "sensor_id": {
                    "type": "string"
                },
                "rule": {
                    "type": "string"
                },
                "type": {
                    "type": "string",
                    "enum": ["realtime", "daily", "monthly"]
                },
                "threshold": {
                    "type": "number"
                }
            },
            "additionalProperties": false,
            "required": [
                "user_id",
                "sensor_id",
                "rule",
                "type",
                "threshold"
            ]
        }
    }
};
