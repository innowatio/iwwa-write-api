export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "id": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "owner": {
            "type": "string"
        },
        "state": {
            "type": "object"
        }
    },
    "additionalProperties": false,
    "required": [
        "id",
        "type",
        "state",
        "owner"
    ]
};
