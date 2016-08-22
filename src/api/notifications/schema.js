export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "enum": ["alarm", "notification", "tip"]
        },
        "title": {
            "type": "string"
        },
        "message": {
            "type": "string"
        },
        "application": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": ["com.innowatio.iwapp", "com.innowatio.energycoach"]
            }
        },
        "userId": {
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
        "message"
    ]
};
