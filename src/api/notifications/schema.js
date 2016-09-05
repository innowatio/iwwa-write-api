export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "enum": ["alarm", "notification", "tip", "default"]
        },
        "title": {
            "type": "string"
        },
        "message": {
            "type": "string"
        },
        "data": {
            "type": "object"
        },
        "usersId": {
            "type": "array",
            "uniqueItems": true,
            "items": {
                "type": "string"
            }
        }
    },
    "additionalProperties": false,
    "required": [
        "title",
        "message",
        "type",
        "usersId"
    ]
};
