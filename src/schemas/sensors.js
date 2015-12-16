export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "id": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "virtual": {
            "type": "boolean"
        },
        "formula": {
            "type": "string"
        }
    },
    "required": [
        "id",
        "type"
    ]
};
