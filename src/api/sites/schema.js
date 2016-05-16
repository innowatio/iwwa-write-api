export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "children": {
            "type": "array",
            "uniqueItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "children": {
                        "$ref": "#/definitions/children"
                    }
                },
                "required": ["id"]
            }
        }
    },
    "type": "object",
    "properties": {
        "id": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "shortDescription": {
            "type": "string"
        },
        "sensors": {
            "$ref": "#/definitions/children"
        }
    },
    "additionalProperties": false,
    "required": [
        "id",
        "name"
    ]
};
