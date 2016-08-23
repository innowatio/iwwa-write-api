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
        "employees": {
            "type": "number"
        },
        "businessType": {
            "type": "string"
        },
        "areaInMq": {
            "type": "number"
        },
        "country": {
            "type": "string"
        },
        "province": {
            "type": "string"
        },
        "address": {
            "type": "string"
        },
        "sensors": {
            "$ref": "#/definitions/children"
        }
    },
    "additionalProperties": false,
    "required": [
        "id"
    ]
};
