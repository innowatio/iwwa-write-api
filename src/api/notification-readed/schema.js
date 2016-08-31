export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "id": {
            "type": "array",
            "uniqueItems": true,
            "items": {
                "type": "string"
            }
        },
        "userId": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "id",
        "userId"
    ]
};
