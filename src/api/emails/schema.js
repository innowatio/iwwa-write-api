export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "timestamp": {
            "type": "string",
            "format": "date-time"
        },
        "toAddresses": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "message": {
            "type": "string"
        },
        "subject": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "timestamp",
        "toAddresses",
        "message",
        "subject"
    ]
};
