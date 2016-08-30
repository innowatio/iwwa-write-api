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
        "applications": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": ["com.innowatio.iwapp", "com.innowatio.energycoach"]
            }
        },
        "usersId": {
            "type": "array",
            "uniqueItems": true,
            "items": {
                "type": "string"
            }
        },
        "topic": {
            "type": "string",
            "enum": ["iwapp-users"]
        }
    },
    "additionalProperties": false,
    "required": [
        "title",
        "message",
        "type",
        "applications"
    ]
};
