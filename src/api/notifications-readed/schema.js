export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "notificationsIds": {
            "type": "array",
            "uniqueItems": true,
            "items": {
                "type": "string"
            }
        }
    },
    "additionalProperties": false,
    "required": [
        "notificationsIds"
    ]
};
