export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "interaction": {
            "type": "object",
            "properties": {
                "body": {
                    "type": "object"
                },
                "timestamp": {
                    "type": "string",
                    "format": "date-time"
                },
                "type": {
                    "type": "string",
                    "enum": ["page_view"]
                }
            },
            "required": ["body", "timestamp", "type"]
        }
    },
    "type": "object",
    "properties": {
        "userId": {
            "type": "string"
        },
        "visitId": {
            "type": "string"
        },
        "interactions": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/interaction"
            }
        },
        "details": {
            "type": "object"
        }
    },
    "additionalProperties": false,
    "required": [
        "userId",
        "visitId",
        "interactions"
    ]
};
