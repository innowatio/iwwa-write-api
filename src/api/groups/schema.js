export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "roles": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        }
    },
    "additionalProperties": false,
    "required": [
        "name",
        "roles"
    ]
};
